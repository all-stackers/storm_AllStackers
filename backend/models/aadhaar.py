from mongo_engine import db
import datetime

class Aadhaar(db.Document):
    created_at = db.DateTimeField(default=datetime.datetime.now, required=True)

    aadhaar_number = db.StringField(max_length=12, required=True, unique=True)
    mobile_number = db.StringField(max_length=10, required=True, unique=True)
    name = db.StringField(required=True)
    address = db.StringField(required=True)
    age = db.IntField(required=True)
    gender = db.StringField(required=True)

    meta = {
        "collection": "aadhaar",
    }

    @classmethod
    def add(cls, args):
        try:
            aadhaar = cls(**args)
            aadhaar.save()

            return {"error": False, "data": aadhaar}
        
        except Exception as e:
            return {"error": True, "message": str(e)}

    @classmethod
    def get(cls, aadhaar_number):
        try:
            aadhaar = cls.objects.get(aadhaar_number=aadhaar_number)
            return {"error": False, "data": aadhaar}
        
        except (cls.DoesNotExist) as e:
            return {"error": True, "message": "Aadhaar number does not exist"}
        
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def getMobileNumber(cls, aadhaar_number):
        try:
            aadhaar = cls.objects.get(aadhaar_number=aadhaar_number)
            return {"error": False, "data": aadhaar.mobile_number}
        
        except (cls.DoesNotExist) as e:
            return {"error": True, "message": "Aadhaar number does not exist"}
        
        except Exception as e:
            return {"error": True, "message": str(e)}