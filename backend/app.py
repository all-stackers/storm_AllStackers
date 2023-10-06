from dotenv import load_dotenv
load_dotenv()

from flask import Flask
from flask_restful import Api
from resources.user import (Signup, Login, SaveSymptoms, User, Test)
from resources.ai import (AISymptoms, FoodAnalysis, Workout)
from mongo_engine import db
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask import jsonify, request
from englisttohindi.englisttohindi import EngtoHindi
from twilio.rest import Client
import os

account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")
verify_sid = os.getenv("TWILIO_VERIFY_SID")
client = Client(account_sid, auth_token)

app = Flask(__name__)
api = Api(app)
CORS(app)

app.config["JWT_SECRET_KEY"] = "all_stackers_going_to_win_hackathon"

jwt = JWTManager(app)

DB_URI = os.getenv("MONGODB_URI")

app.config["MONGODB_HOST"] = DB_URI

db.init_app(app)

api.add_resource(Signup, "/signup")
api.add_resource(Login, "/login")

api.add_resource(SaveSymptoms, "/savesymptoms")
api.add_resource(User, "/getUser")

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

@app.route("/sendMessage", methods=["GET"])
def sendMessage():

    mobile_number = "+919004690126"

    verification = client.verify.v2.services(verify_sid) \
    .verifications \
    .create(to=mobile_number, channel="sms")

    return {"error": False, "data": verification.status}


if __name__ == "__main__":
    app.run(debug=True)
