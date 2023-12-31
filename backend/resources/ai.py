from datetime import datetime, timedelta
import json
from models.user import User as UserModel
from flask_restful import Resource, reqparse
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from langchain import HuggingFaceHub, PromptTemplate, LLMChain, OpenAI
import os

os.environ["OPENAI_API_KEY"] = os.getenv("FLASK_OPENAI_API_KEY")

# llm=HuggingFaceHub(repo_id="google/flan-t5-base", task='text-generation', huggingfacehub_api_token="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")
llm = OpenAI(temperature=0.1, model_name="gpt-3.5-turbo")

template1 = """Act as an Doctor who is expert in women's health, pregnancy and maternal health and he is consulting their patient. 
Using your expertise and knowledge, answer the following question.
question: I am a pregnant woman. Now I am feeling the following symptoms: 
{symptoms}
Is it normal have the given symptoms? I will pass the pregnant date and current date, according you calculate in which of the week of the pregnancy she is in. Keep your response small.
pregnantDate: {pregnantDate}
currentDate: {currentDate}
"""

prompt1 = PromptTemplate(
    template=template1,
    input_variables=[
        "symptoms",
        "pregnantDate",
        "currentDate"
    ]
)

llm_chain = LLMChain(llm=llm, prompt=prompt1)

class AISymptoms(Resource):
    @jwt_required()
    def get(self):

        mobile_number = get_jwt_identity()
        response = UserModel.get_user_by_mobile_number(mobile_number)

        if response["error"]:
            return response, 404
        
        user = response["data"]

        currentDate = datetime.now()
        print(currentDate)

        symptoms = []
        for symptom in user.symptoms:
            for s in symptom["symptoms"]:
                symptoms.append(s["name"])

        print(symptoms)

        result = llm_chain.run(symptoms=symptoms, pregnantDate=user.pregnantDate, currentDate=currentDate)
        
        return {"error": False, "data": result}
    

template2 = """Act as an Doctor who is expert in women's health, pregnancy and maternal health and he is consulting their patient. 
Using your expertise and knowledge, answer the following question.
question: I am a pregnant woman. I have eat the following food items in a day, please tell me is it safe to eat these food items? Also mention thinks like If you diabetic don't eat that, if you are having BP don't eat that, etc. : 
{food2}
pregnantDate: {pregnantDate}
currentDate: {currentDate}
Keep your response short, crisp and to the point.
"""

prompt2 = PromptTemplate(
    template=template2,
    input_variables=[
        "food2",
        "pregnantDate",
        "currentDate"
    ]
)

llm_chain2 = LLMChain(llm=llm, prompt=prompt2)


class FoodAnalysis(Resource):
    @jwt_required()
    def post(self):

        parser = reqparse.RequestParser()
        parser.add_argument("food", type=str, required=True, help="food is required")
        args = parser.parse_args()

        print(args["food"])

        mobile_number = get_jwt_identity()
        response = UserModel.get_user_by_mobile_number(mobile_number)

        if response["error"]:
            return response, 404
        
        user = response["data"]

        currentDate = datetime.now()
        print(currentDate)

        result = llm_chain2.run(food2=args["food"], pregnantDate=user.pregnantDate, currentDate=currentDate)
        
        return {"error": False, "data": result}
    


template3 = """Act as an Doctor who is expert in women's health, pregnancy and maternal health and he is consulting their patient. 
Using your expertise and knowledge, answer the following question.
Give me List of workout to do during pregnancy. Keep in mind my pregranancy week. 
pregnantDate: {pregnantDate}
currentDate: {currentDate}
Keep your response short, crisp and to the point.
"""

prompt3 = PromptTemplate(
    template=template3,
    input_variables=[
        "pregnantDate",
        "currentDate"
    ]
)

llm_chain3 = LLMChain(llm=llm, prompt=prompt3)


class Workout(Resource):
    @jwt_required()
    def get(self):

        mobile_number = get_jwt_identity()

        response = UserModel.get_user_by_mobile_number(mobile_number)

        if response["error"]:
            return response, 404
        
        user = response["data"]

        currentDate = datetime.now()

        result = llm_chain3.run(pregnantDate=user.pregnantDate, currentDate=currentDate)
        return {"error": False, "data": result}