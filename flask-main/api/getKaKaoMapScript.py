from flask_restful import Resource
import os

class getData(Resource):
    def get(self):
        # .env에서 API_KEY 가져오기
        api_key = os.getenv("API_KEY_KAKAO_JS")  
        KakaoMapScriptUrl = f"//dapi.kakao.com/v2/maps/sdk.js?appkey={api_key}"
        # KakaoMapScriptUrl 에 get 요청해서 받은 값 retrun
        return # 리턴