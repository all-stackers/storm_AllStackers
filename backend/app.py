from dotenv import load_dotenv
load_dotenv()

from flask import Flask
from flask_restful import Api
from resources.aadhaar import Aadhaar
from resources.user import (Signup, Login, SaveSymptoms, User, Test)
from resources.ai import (AISymptoms, FoodAnalysis, Workout)
from mongo_engine import db
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from datetime import timedelta
from flask import jsonify, request
from englisttohindi.englisttohindi import EngtoHindi
from twilio.rest import Client

account_sid = "AC9bfcbe0ba32fab4c09b5425fddceace8"
auth_token = "5d51d42b2d4b308a771672a88efedbc6"
verify_sid = "VA7e64a86c7e0d139780d5b3f77367f38d"
client = Client(account_sid, auth_token)

app = Flask(__name__)
api = Api(app)
CORS(app)

app.config["JWT_SECRET_KEY"] = "all_stackers_going_to_win_hackathon"

jwt = JWTManager(app)

DB_URI = "mongodb+srv://allstackers:hHQ36QUvaXAxI7pK@cluster0.o5vldzf.mongodb.net/codeissance?retryWrites=true&w=majority"

app.config["MONGODB_HOST"] = DB_URI

db.init_app(app)

# api.add_resource(Aadhaar, "/aadhaar")

api.add_resource(Signup, "/signup")
api.add_resource(Login, "/login")

api.add_resource(SaveSymptoms, "/savesymptoms")
api.add_resource(User, "/getUser")

# 1. ai chat bot

api.add_resource(AISymptoms, "/aiSymptoms")
api.add_resource(FoodAnalysis, "/foodAnalysis")

api.add_resource(Workout, "/workout")
api.add_resource(Test, "/test")

@app.route('/translate', methods=['POST'])
def translate_text():
    try:
        # Get the text from the POST request
        data = request.get_json()
        text_to_translate = data['text']

        # Translate the text using EngtoHindi
        translator = EngtoHindi(text_to_translate)
        translation = translator.convert

        return jsonify({'translation': translation})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

# api.add_resource(Secure, "/testingjwt")

@app.route("/sendMessage", methods=["GET"])
def sendMessage():

    mobile_number = "+919004690126"

    verification = client.verify.v2.services(verify_sid) \
    .verifications \
    .create(to=mobile_number, channel="sms")

    return {"error": False, "data": verification.status}


if __name__ == "__main__":
    app.run(debug=True)
