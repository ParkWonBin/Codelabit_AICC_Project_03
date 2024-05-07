from flask import Flask, request, jsonify, render_template, make_response
from geopy.geocoders import Nominatim
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
import requests
import json
import os

class testAPI(Resource):
    def get(self, deal_ymd):
        # 0. 기본 변수 가져오기
        url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade'
        access_key = os.getenv("OPEN_API_KEY_DECODING") 
        

        # 1. 요청정보 만들기
        url = url
        params = {
           'serviceKey': access_key, 
           'LAWD_CD': '11110', 
            # 'DEAL_YMD': '202305',
            # 'DEAL_YMD': '202403',
            'DEAL_YMD': deal_ymd,
           '_type': 'json'
        }


  # API 요청
        response = requests.get(url, params=params)
        if response.status_code != 200:
            return jsonify({'error': 'Failed to fetch data'}), response.status_code
        print(f'response =====>  {response}')
        dataOpenAPI =  json.loads(requests.get(url, params=params).text)
        # JSON 데이터 파싱
        data = response.json()
        print(f'data =====>  {data}')

        resultJson = {'data': []}
        items = dataOpenAPI.get('response', {}).get('body', {}).get('items', {}).get('item', [])

        geolocator = Nominatim(user_agent='geoapiExercises')
        i = 1  # 번호 초기화
        # for i, item in enumerate(items, start=1):
        for item in items:
                location = geolocator.geocode(item.get('법정동'))
                if location:
                        resultJson['data'].append({
                            '번호': i,
                            '건물면적': item.get('건물면적'),
                            '용도지역': item.get('용도지역'),
                            '위도': location.latitude,
                            '경도': location.longitude,
                            '주소': item.get('법정동'),
                            '주소지역': item.get('시군구')
                        })
                        i += 1  # 다음 번호로 증가

        # 결과를 JSON 문자열로 변환하여 반환
        # return json.dumps(resultJson, ensure_ascii=False)
        return jsonify(resultJson)