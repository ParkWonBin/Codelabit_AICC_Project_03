import requests
import json
import xmltodict

access_key = '68raIsLdC4XXFhjBlvluVMt+3UTguCEPFuYMoCNKbJPeIMVejtK1JojcJCcz78KXkSh0BIV4DdqqREyNIkM7yA=='
def get_request_url():
    url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade'
    params = {'serviceKey': access_key, 'LAWD_CD': '11110', 'DEAL_YMD': '201511'}

    response = requests.get(url, params=params)
    return response.text

##########################################
from flask import Flask, request
# pip install flask-restful
from flask_restful import Resource, Api

# pip install flask-cors
from flask_cors import CORS  # 추가

app = Flask(__name__)
app.debug = True
api = Api(app)
CORS(app)

class test(Resource):
    def get(self):
        # 복잡한 계산
        parsed_dict = xmltodict.parse(get_request_url())

        # 계산 결과를 출력
        return parsed_dict["R"]

# NodeJS > Express였으면 대충 이런 내용이었을 것임.
# app.get('/getData1',(req,res)=>{res.send("{'name': 123, 'data': [1, 2, 3]}")})
api.add_resource(test,'/test')

if __name__ == '__main__':
    # app.run : Flask 서버 구동, 기본 포트 5000번
   app.run(host='localhost')
   # app.run(host='192.168.0.95')