from datetime import datetime, timedelta
import json
from models.user import User as UserModel
from flask_restful import Resource, reqparse
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from langchain import HuggingFaceHub, PromptTemplate, LLMChain, OpenAI
import os

os.environ["OPENAI_API_KEY"] = "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"

# llm=HuggingFaceHub(repo_id="google/flan-t5-base", task='text-generation', huggingfacehub_api_token="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")
llm = OpenAI(temperature=0.1, model_name="gpt-3.5-turbo")

template1 = """Act as an Doctor who is expert in women's health, pregnancy and maternal health and he is consulting their patient. 
Using your expertise and knowledge, answer the following question.
question: I am a {week} week pregnant woman. Now I am feeling the following symptoms: 
{symptoms}
Is it normal have the given symptoms?
"""

prompt1 = PromptTemplate(
    template=template1,
    input_variables=[
        "week",
        "symptoms"
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

        symptoms = []
        for symptom in user.symptoms:
            for s in symptom["symptoms"]:
                symptoms.append(s["name"])

        result = llm_chain.run(week="24", symptoms=symptoms)
        
        return {"error": False, "data": result}
    

template2 = """Act as an Doctor who is expert in women's health, pregnancy and maternal health and he is consulting their patient. 
Using your expertise and knowledge, answer the following question.
question: I am a {week} week pregnant woman. I have eat the following food items in a day, please tell me is it safe to eat these food items? Also mention thinks like If you diabetic don't eat that, if you are having BP don't eat that, etc. : 
{food}
Is it normal have the given symptoms?
"""

prompt2 = PromptTemplate(
    template=template2,
    input_variables=[
        "week",
        "food"
    ]
)

llm_chain2 = LLMChain(llm=llm, prompt=prompt2)


class FoodAnalysis(Resource):
    @jwt_required()
    def post(self):

        parser = reqparse.RequestParser()
        parser.add_argument("food", type=str, required=True, help="food is required")
        args = parser.parse_args()


        mobile_number = get_jwt_identity()
        response = UserModel.get_user_by_mobile_number(mobile_number)

        if response["error"]:
            return response, 404
        
        user = response["data"]

        result = llm_chain2.run(week="24", food=args["food"])
        
        return {"error": False, "data": result}