from mongo_engine import db
from pymongo.errors import DuplicateKeyError
from mongoengine import NotUniqueError

class User(db.Document):
    mobile_number = db.StringField(required=True, unique=True)
    password = db.StringField(required=True)
    name = db.StringField(required=True)
    age = db.StringField(required=True)
    pregnantDate = db.StringField(required=True)
    dueDate = db.StringField(required=True)
    symptoms = db.ListField(db.StringField(), default=[])

    meta = {'collection': 'users'}

    @classmethod
    def add_user(cls, args):
        try:
            user = cls(**args)
            user.save()
            return {"error": False, "data": user}
        
        except (DuplicateKeyError, NotUniqueError):
            return {"error": True, "message": "User with same mobile already exists"}
        
        except:
            return {"error": True, "message": "Error adding user"}

    @classmethod
    def get_user_by_mobile_number(cls, mobile_number):
        try:
            user = cls.objects.get(mobile_number=mobile_number)
            return {"error": False, "data": user}
        
        except cls.DoesNotExist:
            return {"error": True, "message": "User does not exist"}
        
        except:
            return {"error": True, "message": "Error getting user"}