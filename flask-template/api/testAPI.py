import os
from flask_restful import Resource, reqparse
from dotenv import load_dotenv

load_dotenv()  # .env 파일 로드
class testAPI(Resource):
    def get(self):
        api_key = os.getenv("API_KEY_DECODING")  # .env에서 API_KEY 가져오기
        # 외부 API 호출 로직 구현 (예시)
        return {'api_key': api_key}
