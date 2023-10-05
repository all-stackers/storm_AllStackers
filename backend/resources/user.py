from datetime import datetime, timedelta
import json
from models.user import User as UserModel
from flask_restful import Resource, reqparse
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import bcrypt

class Signup(Resource):

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("mobile_number", type=str, required=True, help="mobile_number is required")
        parser.add_argument("password", type=str, required=True, help="password is required")
        parser.add_argument("name", type=str, required=True, help="name is required")
        parser.add_argument("age", type=str, required=True, help="age is required")
        parser.add_argument("pregnantDate", type=str, required=True, help="pregnantDate is required")
        parser.add_argument("dueDate", type=str, required=True, help="due_date is required")
        args = parser.parse_args()

        # args["password"] = bcrypt.hashpw(
        #     args["password"].encode("utf-8"), bcrypt.gensalt()
        # ).decode("utf-8")
    
        response = UserModel.add_user(args)
        if response["error"]:
            return response, 500
        
        user = response["data"]

        access_token = create_access_token(identity=user.mobile_number, expires_delta=timedelta(days=1))
        
        return {"error": False, "data": json.loads(user.to_json()), "access_token": access_token}
    

class Login(Resource):

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("mobile_number", type=str, required=True, help="mobile_number is required")
        parser.add_argument("password", type=str, required=True, help="password is required")

        args = parser.parse_args()

        response = UserModel.get_user_by_mobile_number(args["mobile_number"])
        if response["error"]:
            return response, 404
        
        user = response["data"]

        passwordMatch = args["password"] == user.password
        # 
        if not passwordMatch:
            return {"error": True, "message": "Invalid credentials"}, 401
        
        access_token = create_access_token(identity=user.mobile_number, expires_delta=timedelta(days=1))
        
        return {"error": False, "data": json.loads(user.to_json()), "access_token": access_token}
    

class User(Resource):
    # get user by jwt required

    @jwt_required()
    def get(self):
        mobile_number = get_jwt_identity()
        response = UserModel.get_user_by_mobile_number(mobile_number)
        if response["error"]:
            return response, 404
        
        user = response["data"]
        return {"error": False, "data": json.loads(user.to_json())}

class SaveSymptoms(Resource):
    @jwt_required()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("symptoms", type=dict, required=True, help="symptoms is required")
        args = parser.parse_args()

        mobile_number = get_jwt_identity()
        response = UserModel.add_symptoms(mobile_number, args["symptoms"])
        if response["error"]:
            return response, 500
        
        user = response["data"]
        return {"error": False, "data": json.loads(user.to_json())}

class Secure(Resource):
    @jwt_required()
    def get(self):
        mobile_number = get_jwt_identity()
        return {"error": False, "data": mobile_number}
    

class Test(Resource):

    def get(self):
        return {"error": False, "data": "Hello World"}