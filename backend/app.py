from flask import Flask
from flask_restful import Api
from resources.aadhaar import Aadhaar
from resources.user import (Signup, Login, Secure)
from mongo_engine import db
from flask_jwt_extended import JWTManager
from flask_cors import CORS

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
# api.add_resource(Secure, "/testingjwt")

if __name__ == "__main__":
    app.run(debug=True)
