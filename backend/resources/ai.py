from datetime import datetime, timedelta
import json
from models.user import User as UserModel
from flask_restful import Resource, reqparse
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from langchain import HuggingFaceHub, PromptTemplate, LLMChain, OpenAI
import os

os.environ["OPENAI_API_KEY"] = "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"

# llm=HuggingFaceHub(repo_id="tiiuae/falcon-7b-instruct", huggingfacehub_api_token="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")
llm = OpenAI(temperature=0.1, model_name="gpt-3.5-turbo-16k")

template1 = """Act as an Doctor who is expert in women's health, pregnancy and maternal health and he is consulting their patient. 
Using your expertise and knowledge, answer the following question.
question: I am a {week} week pregnant woman. Now I am feeling the following symptoms: 
{symptoms}
Is it normal have the given symptoms? What should I do? Should I consult the doctor? If yes, then what should I tell the doctor?
"""

prompt1 = PromptTemplate(
    template=template1,
    input_variables=[
        "week",
        "symptoms"
    ]
)

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

        result = llm.predict("""
            Act as an Doctor who is expert in women's health, pregnancy and maternal health and he is consulting their patient. 
            Using your expertise and knowledge, answer the following question.
            question: I am a 24 weeks week pregnant woman. Now I am feeling the following symptoms: 
            ['Cramping', 'Mood swings', 'Hair changes', 'Abdominal Pain', 'Mood swings', 'Hair changes', 'Abdominal Pain', 'Mood swings', 'Hair changes', 'Mood swings', 'Skin Changes', 'Fatigue', 'Mood swings', 'Hair changes']
            Is it normal have the given symptoms? What should I do?
                    """)
        
        return {"error": False, "data": result}