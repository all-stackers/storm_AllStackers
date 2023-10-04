from models.aadhaar import Aadhaar as AadhaarModel
from flask_restful import Resource, reqparse, request
import json
from twilio.rest import Client

account_sid = "AC9bfcbe0ba32fab4c09b5425fddceace8"
auth_token = "1c482326976a282f93a9087553e9f287"
verify_sid = "VA7e64a86c7e0d139780d5b3f77367f38d"
client = Client(account_sid, auth_token)

class Aadhaar(Resource):
    def post(self):

        send_otp = request.args.get('send_otp')
        verify_otp = request.args.get('verify_otp')
        parser = reqparse.RequestParser()
        parser.add_argument("aadhaar_number", type=str, required=True, help="aadhaar_number is required")

        if send_otp:
            args = parser.parse_args()
            return sendOTP(args)

        elif verify_otp:
            parser.add_argument("otp", type=int, required=True, help="otp is required")
            args = parser.parse_args()
            return verifyOTP(args)

        parser.add_argument("mobile_number", type=str, required=True, help="mobile_number is required")
        parser.add_argument("name", type=str, required=True, help="name is required")
        parser.add_argument("address", type=str, required=True, help="address is required")
        parser.add_argument("age", type=int, required=True, help="age is required")
        parser.add_argument("gender", type=str, required=True, help="gender is required")

        args = parser.parse_args()

        response = AadhaarModel.add(args)
        if response["error"]:
            return {"error": True, "message": response["message"]}
        
        return {"error": False, "data": json.loads(response["data"].to_json())}
    

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument("aadhaar_number", type=str, required=True, help="aadhaar_number is required")

        args = parser.parse_args()

        response = AadhaarModel.get(args["aadhaar_number"])
        if response["error"]:
            return {"error": True, "message": response["message"]}
        
        return {"error": False, "data": json.loads(response["data"].to_json())}
    

def sendOTP(args):
    try:
        response = AadhaarModel.getMobileNumber(args["aadhaar_number"])
        if response["error"]:
            return {"error": True, "message": response["message"]}
        
        mobile_number = "+91" + response["data"]

        verification = client.verify.v2.services(verify_sid) \
        .verifications \
        .create(to=mobile_number, channel="sms")

        return {"error": False, "data": verification.status}

    except Exception as e:
        return {"error": True, "message": str(e)}   


def verifyOTP(args):
    try:
        response = AadhaarModel.getMobileNumber(args["aadhaar_number"])
        if response["error"]:
            return {"error": True, "message": response["message"]}
        
        mobile_number = "+91" + response["data"]

        verification_check = client.verify.v2.services(verify_sid) \
        .verification_checks \
        .create(to=mobile_number, code=args["otp"])

        return {"error": False, "data": verification_check.status}

    except Exception as e:
        return {"error": True, "message": str(e)} 
    