# 정승호 할일 목록
역할 : 서비스 기획 및 API

## ToDoList
#### 공통 
- [ ] _Document 폴더 내 파일들 확인

#### React
- [ ] React 프로젝트 생성
- [ ] 간단한 버튼 만들어서 API 요청 해보기

#### Express
- [ ] Express 프로젝트 생성
- [ ] 간단한 엔드포인트 만들어서 API 응답 해보기

#### 서비스 기획 
- [ ] 어떤 웹사이트를 만들지 구체화
- [ ] 어디서 어떤 데이터를 가져올 수 있는지 확인
- [x] API 권한 신청 및 테스트 해보기
  OpenAPI 에서 권한 신청
  (부동산 거래 웹 서비스 관련 공공API 해당 URL정보 list업 정보자료들..)

- [ ] 웹브라우저에서 할일 -> FrontEnd에 화면 구현 요청
- [ ] 서버에서 할일 -> BackEnd에 기능 구현 요청

---
## Done
- [x] 240412(금) 이슈발견 : express-react 통합 관련
  -  현상 : express에서 react 배포한 페이지 깨짐
  -  재현 : static 설정 후 sendFile로 static의 index.html 파일 제공
  -  원인 : 잘 모르겠습니다 ㅠㅠ
  -  해결 : react로 배포후에는 꼭 sendFile말고 static으로 배포하시길 ㅠㅠ
- [x] 240411(목) vscode 설정
- [x] 240411(목) api 권한신청 - OpenAPI 부동산
- [x] 240411(목) api 권한신청 - 외환 거래 송금 서비스 관련
- [x] 240411(목) 서비스기획 - 외환관련
- [x] 240411(목) api getRTMSDataSvcNrgTrade 테스트(pytohn)
- [x] 240409(화) 공통 : 프로젝트 초대 수락
- [x] 240408(월) React : 복습 시작
- [x] 240408(월) 공통 : 프로젝트 내 역할 인지


- [x] 240415(월) 이슈발견: 금일 업무 보고 
  부동산 매매 거래 현황에 관련한 OpenAPI를 
  파이썬으로 Encoding Key를 받아 JSON데이터를
  Pandas 데이터프레임을 변환하여 데이터를 추출작업을
  진행 하였음.
  - [x] 240415(월) 진행 했던 작업: 위도, 경도를 받아와 GPS 지도데이터를 표시하기 위한 이전 작업으로서 해당 Json 데이터를 데이터프레임으로 전환하여 불일치가 되거나 중요하지 않는 값의 열을 삭제 하였음. 
  - [x] 240415(월) 진행 했던 작업: 데이터를 시각화에 앞서 년도 데이터를 Object타입에서 날짜 타입으로 변환하여 해당날짜에 2022년도 원하는 관련된 정보를 받아오고 거래금액을 포함하여 파이썬에서 제공하는 matplotlib 라이브러리 데이터 그래프 출력 작업을 하였지만 원하는 데이터와 그래프로서 정확한 결과값을 가져왔는지는 의심됨.
- [x] 240415(월) 진행 했던 작업: 외환 거래소에 들어가
  관련 API를 조사함.
  - [x] 240415(월) 이슈사항 발생: 가지고 온 데이터가 GPS 및 위치 정보를 출력할 수 있는 위도, 경도에 대한 데이터가 없었음.
  - [x] 240415(월) 해결 방안 모색: 권한 신청을 해 놓은 OpenAPI중 위도, 경도의 수치정보가 포함되어있는 API를 조사해 봄.
  - [x] 240415(월) 이슈 해결 유무: 위치 정보가 없으므로 결국 해결할 수 없었음.

  - [x] 240415(월) 내일 할 목록: 카카오 지도API를 신청하여 지도상의 위치가 표사 될 수 있도록 작업할 예정임.


  - [x] 240416(화) 금일 작업 적용한 내용: 지도 데이터를 적용해 보기위해 테스트 연습으로 카카오 맵 API를 적용, 지도 화면을 출력해 보기위해 카카오 사이트에서 
  인증키 권한을 신청하여 발급완료함. 
  - [x] 240416(화) 금일 작업 내용: express서버를 이용하여 카카오 MapAPI 지도 데이터를 예제 소스를 바탕으로 구현해보고, 화면을 출력하기 위해 여러가지 방법으로 시도하며, 코드를 구현햐려고 해 보았음. 
  - [x] 240416(화) 금일 작업 내용: JavaScript와 React를 소스를 사용하여 코드를 구현하려고 노력하였음, 원빈씨 지도하에 카카오 지도를 띄워볼려고 시도하였으나 
  kakao.maps.load가 정의가 안되어 있다는 error문구를 확인하였음. GPT에 물어보니
  스크립트 로드오류거나, mapContainer가 호출이 안되서 그렇다는 답변을 받음, 그래서
  혼란상태로 고만하고 있다가, 서버 포트가 원가 오류가 있는것 같아서 원빈PM과 함께 
  포트번호를 변경 하였음, 콘솔창 오류 문구를 검색해보니, 8080포트가 활성화 되어있어
  아마도 포트가 충돌 난거 같아 포트번호흫 변경후 다시 시도하니 브라우저상 화면은 출력되지만 지도 데이터는 나오질 않음. 
  - [x] 240416(화) 금일 작업 내용: 현재 React로 import styled from "styled-components" 모듈이랑 app.key 등을 받아서  mapScript.addEventListener("load", onLoadKakaoMap) 함수를 실행해 값을 받아오려 시도하는 중. 다만 내가 React의 관련 기술을 잘 몰라 지도 데이터 확인 하지 못함.

 - [x] 240415(화)  앞으로 내가 고쳐나가야 할것들: 코드를 절차적으로 함수형, 객체지향등의 방법론의 방식으로 프로그램을 앞으로 접근해 나간다면 점차 좋아질수 있을것이라고 생각이 든다. 힘을 보태야 하는데 큰일이다.. 점차 나아질 것이라고 조심스레 추측해본다. 코딩을 잘하고 싶은데 내가 접근하는 부분에 이부분이 문제라고
 확실한 믿음이 없다. 앞으로 단점을 보완하여 나아가는 수 밖에 없다.. 시간이 필요하다..
  
 - [x] 240417(수) 오늘 작업한 내용: React 코드로 kakao.maps.load함수를 호춯해 지도 정보를 화면에 출력하는 목적을 가지고 코드 리펙토링을 진행함.
 - [X] 20240417(수) 오늘 작업한 내용: 콘솔창에 kakao.map를 로드하지 못해 undefinded 에러가 출력되어 map객체와 과 지도 인증키를 다시 발급해보고 수정을 하였더니, 에러오류는 사라졌지만, 지도가 화면에 나오질 않음. 관련 소스를 업데이트 예정.
- [x] 240417(수) 오늘 작업한 내용: 오후에 flask 서버로 api 가지고 오는 작업을 시도해볼 예정임. 
- [x] 240417(수) 오늘 작업한 내용: kakao API 를 불러오는 데 성공함. 진행과정은 script src 에서 외부에 있는 맵 데이터를 가지고 올수 없었는데, 실제 데이터를 로컬로 
  파일 형태를 만들어 보니 바로 지도 정보가 브라우저 창에서 실행됨. 원인은 링크주소를 브라우저에서 가지고 올 수 없는 어떠한 제약 조건이 있을것이라고 추측해봄, 나열되어 었는 kakao.maps 데이터를 그대로 가지고 와서 코드에 붙여 보니 어떠한 제약조건에 위배가 안되었는지 바로 해결 할 수 있었습니다.  
- [x] 240417(수) 오늘 작업한 내용: flask 서버를 구동 하기위해 템플릿을 가지고 소스파일 구조를 파악해 봄, 다량의 나누어 져있는 파일들을 한개의 .py 파이썬 파일로 취합해서 flask 서버를 테스트 해보니 결과 값을 바로 반환 받을 수 있었음. 그 밖에 클래스를 선언하여 Resorce 클래스인지 함수인지 객체 인지는 알수 없는 요소를 상속받아 
원하는 문자열 데이터를 return 받을수 있어서 결과는 아주 흡족했음.
- [x] 240417(수) 오늘 작업한 내용: 정해진 스케줄에 맞게 게획대로 알맞게 진행되어 가고 있는것을 느낄 수 있었습니다. 배운다는 자세로 목표한 할당량을 감당할 수 있게 되길 현재 희망하고 있음.
- [X] 240417(수) flask API 를 실행하기 위한 작업 절차들:
  1. 파이썬 안에서 파일분리 과정 
 -> from (패키지명or폴더명.파일명or파일명) import (클래스명 or 함수명)

2. 클래스 정의, 함수 정의 내용
-> 클래스가 다른 클래스를 상속받음.
-> 클래스 안에 함수를 정의하는 방법.

3. Flask 서버사용 방법
-> Flask 작동시키는 법
-> 외부에서 내 PC에 작동시킨 Flask 진입하는 방법

```python
# init 에서 설정한 Flask 객체 가져오기
from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from flask_restful import Resource

class index(Resource):
    def get(self):
        return {
            '성공여부':'성공', 
            '데이터':[1,2,3,4]
        }

# Flask 객체 초기화
app = Flask(__name__)

# CORS 적용
CORS(app)  

# 라우터 설정
api = Api(app)

# 경로없이 들어오면 정적 파일 보여주기
api.add_resource(index, '/')

# app.run : Flask 서버 구동, 기본 포트 5000번
if __name__ == "__main__":
    port = 4000
    print( f"서버 실행 |  http://localhost:{port}")
    app.run(host='localhost', port=port, debug=True)
```
 
- [x] 240418(목) 오늘 작업한 내용: flask 프레임워크로 
  서버구조를 분석하고, 분리되어있는 파일조각들을 각각 함수별, 클래스별로 모아서 통합하여 하나의 파일로 서버를 작성함.
- [x] 240418(목) 오늘 작업한 내용: get 함수로 address 값을    받아와 우리가 원하는 주소를 가지고 지도정보를 즉 위, 경도를 
값을 json 타입으로 브라우저 화면 창에 가지고 오는 것을 성공하였음. 
- [x] 240418(목) 오늘 작업한 내용: 가지고 온 속성정보를 
  알려드립니다. 
  ```js
  {
    "data": [
        {
            "name": "경북지방경찰청",
            "위도": 36.09518431,
            "경도": 128.46654156
        }
    ]
}
```
 - [x] 240418(목) 오늘 작업한 내용: 금일 작업 할당 목록 보여드립니다. (수행완료 한 부분 V쳌므) 1. 플라스크 구조 복습해보기 (V)
2. '/getData' 로 get요청 들어오면 json 반환하도록 만들어보기.(V)
3. 플라스크에 '/api'로 get 요청 보내면. 공공데이터에서 가져온 데이터 그대로 전달해주기 (V)
(쥬피터노트북으로 부동산 거래api 관련 데이터 추출해보기(V))
- [x] 240418(목) 오늘 작업한 내용: /testAPI 로 get요청 보내 
api 데이터 정보 응답 받는데 성공 responese.text 로 결과값을 
return 받는것이 중요한 포인트 부분이라고 생각함. 
- [x] 240418(목) 오늘 작업한 내용: 팀원 PC에서 나의 flask 서버
ip주쇼를 연결하려고 했지만, 인바운드 규칙 설정을 해도 처음엔 연결이 실패 하였으나, host=localhost에서 0.0.0.0으로 초기화? 인지 아닌지는 모르겠으나 아무튼 변경하니? ip주소를 전부 연결할 수 있었음. 
- [x] 240418(목) 오늘 작업한 내용: 금일 작업한 소스코드를 올립니다. 
```python 
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from flask import current_app
import requests
import json

class testAPI(Resource):
    def get(self):
        # 0. 기본 변수 가져오기
        apiKey = 'http://apis.data.go.kr/5080000/polcsttnCctvSttuService/getPolcsttnCctvSttu'
        access_key = '이곳에 인증키'

        # 1. 요청정보 만들기
        url = apiKey
        params = {
            'serviceKey': access_key,
            '_type': 'json',
            'instl_place': '구미시 인동가산로(신동) 임시검문소 앞 (가산→구미)',
            'la': 36.09518431,
            'lo' : 128.46654156,
            'mgc_rspnber': '경북지방경찰청',
            'telno' : '054-824-2452'
        }

        # 2. 해당 요청정보로 데이터를 가져온다.
        dataOpenAPI =  json.loads(requests.get(url, params=params).text)

        # 3. 가져온 데이터를 사용해서 결과물을 만든다.
        resultJson ={'data':[]}
        for i in range(len(dataOpenAPI['body'])):
            resultJson['data'].append({
            'name' : dataOpenAPI['body'][i]['mgc_rspnber'],
            '위도' : dataOpenAPI['body'][i]['la'],
            '경도' : dataOpenAPI['body'][i]['lo']
        })

        # 4. 결과물을 고객?에게 전달해준다. (리턴)
        return resultJson


class GeocordResource(Resource):
    def get(self):
        return searchAddress(request.args.get('address'))

def searchAddress(address):
    apikey = "652EC099-CCB3-350E-AE95-1C0262EBC36B"
    apiurl = "https://api.vworld.kr/req/search?"
    params = {
        "service": "search",
        "request": "search",
        "crs": "EPSG:4326",
        "query": address,
        "type": "address",
        "category": "road",
        "format": "json",
        "key": apikey,
    }
    
    response = requests.get(apiurl, params=params)
    print(response)

    data = response.json()
    print(data)


    result = {'data':[]}
    if data.get('response') and data['response'].get('result') and data['response']['result'].get('items'):
        for x in data['response']['result']['items']:
            result['data'].append({
                '주소': x['address']['road'],
                '위도': x['point']['y'],
                '경도': x['point']['x']
            })
    else:
        result['error'] = 'No results found'

    return result


def route_app(app):
    api = Api(app)

    # 경로없이 들어오면 정적 파일 보여주기
    api.add_resource(testAPI,'/')
    api.add_resource(GeocordResource, '/getGeocord')

def create_app():
    # Flask 객체 초기화
    app = Flask(__name__)

    # 정적 파일 디렉토리 설정
    app.static_folder = 'public'
    
    # URL 경로의 prefix 제거
    app.static_url_path = ''

    # CORS 적용
    CORS(app)  

    return app


app = create_app()
route_app(app)


# app.run : Flask 서버 구동, 기본 포트 5000번
if __name__ == "__main__":
    # serverConfig = {
    #     'host': 'localhost',
    #     'port': 4000, 
    #     'debug': True
    # }

    port = 4000
    print( f"서버 실행 |  http://localhost:{port}")
    app.run(host= '0.0.0.0',
        port= port, 
        debug= True)


```
 - [x] 240418(목) 명일 작업 에정인 사항:
   oracle 과 연결 진행 예정
   개인 pc의 오라클 사용해서 연결
   잘 되면 정훈씨 pc와 연결 시도 할 계획임
   버튼을 클릭하면 falsk에서 data 받아서 출력 작업 계획 예정
   버튼을 클릭하면 express 에서 data 받아서 출력 ''


- [x] 240418(금) 오늘 작업한 내용:
  부동산 데이터를 분석 후, 매매 거래 데이터에 위도 경도 데이터를 붙여오는 작업을 합니다. 
- [x] 240418(금) 오늘 작업한 내용: 
  리엑트 안에서 카카오 맵을 이용하여 가능하다면 마커랑 텍스트까지 띄워보기 작업을 진행합니다. 
 - [x] 240418(금) 오늘 작업한 내용: 
  아니면 카카오 맵이라도 띄워보기를 진행합니다.
 - [x] 240418(금) 오늘 작업한 내용: 
  flask 서버에서 공공데이터에서 제공하는 부동산 거래 현황 데이터를 
  json 데이터로 변환해서 받아오는 것의 일련의 작업을 진행함. 처음엔 JSONDecoder Error가 발생해 인코딩 문제인가 하고 GPT를 콩해 검색해보니, json 티입을 가지고 오지 못해 타입에러가 발생한다고 함 그래서 가지고 온 api 타입을 check 했더니, type=json이 아니라, '_type' 이런식으로 표기해와야 한다는 것을 알게 되었다, 다시 서버를 돌렸더니, 디코드 에러는 사라졌는데, 갑자기 TypeError 가 발생 이것도 GPT의 도움으로 수소문 끝에 json.dumps(resultJson, ensure_ascii=False)를 썼더니 이상하게 표기되어, 다시 jsonify() 함수를 적용했더니, 데이터가 이쁘게 출력되었음. 첫번째 임무는 완료되어 상당히 흡족했음.
 - [x] 240418(금) 오늘 작업한 내용: 
   json 부동산 데이터를 가지고 오는데 성공을 하니, 지도데이터를 표현하는데 필요한 위도, 경도를 데이터 붙이는 작업을 진행하려고 시도함. 그래서 구글 검색 해보니 주소 값으로 위 경도 데이터를 반환값을 반환받을 수 있는 파이썬에서 제공해주는 geopy라는 라이브러리가 있었음. pip install geopy 명령어로 설치를 하고 import로 Nominatim 클래스로 명시하며 코드를 구현하였더니,  아주 순조롭게 원하는 json 데이터만을 추출해서 추가로 해당 위도, 경도 데이터를 다행히 잘 받아올 수 있음.
   이것은 구현 완성된 코드입니다. 
```python
from flask import Flask, request, jsonify
from geopy.geocoders import Nominatim
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from flask import current_app
import requests
import json

class testAPI(Resource):
    def get(self):
        # 0. 기본 변수 가져오기
        url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade'
        access_key = '68raIsLdC4XXFhjBlvluVMt+3UTguCEPFuYMoCNKbJPeIMVejtK1JojcJCcz78KXkSh0BIV4DdqqREyNIkM7yA=='
        # access_key2 = '68raIsLdC4XXFhjBlvluVMt%2B3UTguCEPFuYMoCNKbJPeIMVejtK1JojcJCcz78KXkSh0BIV4DdqqREyNIkM7yA%3D%3D'

        # 1. 요청정보 만들기
        url = url
        params = {
           'serviceKey': access_key, 
           'LAWD_CD': '11110', 
           'DEAL_YMD': '202305',
           '_type': 'json'
        }

        # 2. 해당 요청정보로 데이터를 가져온다.
        
        response = requests.get(url, params=params)
        dataOpenAPI =  json.loads(requests.get(url, params=params).text)
        # dataOpenAPI =  json.loads(response.text)
        # return response.text

        print(response)

        data = response.json()
        print(data)

        # 3. 가져온 데이터를 사용해서 결과물을 만든다.
        # resultJson ={'data':[]}
        # for i in range(len(dataOpenAPI['response']['body']['items']['item'])):
        #     resultJson['data'].append({
        #     # '건물면적' : dataOpenAPI['response']['body']['items']['item'][i]['건물면적'],
        #     '주소' : dataOpenAPI['response']['body']['items']['item']['법정동'],
        #     '주소지역' : dataOpenAPI['response']['body']['items']['item'][i]['시군구'],
        #     '용도지역' : dataOpenAPI['response']['body']['items']['item'][i]['용도지역']
        # })

        # 4. 결과물을 고객?에게 전달해준다. (리턴)
        # return resultJson

        resultJson ={'data':[]}
        items = dataOpenAPI.get('response', {}).get('body', {}).get('items', {}).get('item', [])
        
        geolocator = Nominatim(user_agent='chiricuto')
        for item in items:
            location = geolocator.geocode(item.get('시군구'))

            # print(f'AAAAAAA:',addr)  
            # latitude = location.latitude
            # longitude = location.longitude 
            # print(f'위도:',latitude)  
            # print(f'경도:',longitude)  
        
            # try:
            resultJson['data'].append({
                '건물면적': item.get('건물면적'),
                '주소': item.get('법정동'),
                '주소지역': item.get('시군구'),
                '용도지역': item.get('용도지역'),
                '위도':location.latitude,
                '경도':location.longitude
            })
            # except KeyError as e:
                # continue  # 또는 로그 찍기 등의 예외 처리
        # 결과를 JSON 문자열로 변환하여 반환
        # return json.dumps(resultJson, ensure_ascii=False)
        return jsonify(resultJson)

        def route_app(app):
    api = Api(app)

    # 경로없이 들어오면 정적 파일 보여주기
    api.add_resource(testAPI,'/')
    # api.add_resource(GeocordResource, '/getGeocord')

def create_app():
    # Flask 객체 초기화
    app = Flask(__name__)

    # 정적 파일 디렉토리 설정
    app.static_folder = 'public'
    
    # URL 경로의 prefix 제거
    app.static_url_path = ''

    # CORS 적용
    CORS(app)  

    return app


app = create_app()
route_app(app)


# app.run : Flask 서버 구동, 기본 포트 5000번
if __name__ == "__main__":
    # serverConfig = {
    #     'host': 'localhost',
    #     'port': 4000, 
    #     'debug': True
    # }

    port = 4000
    print( f"서버 실행 |  http://localhost:{port}")
    app.run(host= '0.0.0.0',
        port= port, 
        debug= True) 
   ```

이상임.   
- [x] 240418(금) 오늘 작업한 내용:    
지난번 실패햤던 <script src='?'> 로 api 가지고 와서 지도를 브라우저화면에 출력하는 작업이 스크립트가 로드가 안되면서 연달이
실행에 실패하였는데, 동일한 소스를 파이썬 내장서버를 사용하여 url을
호춯하였더니 카카오 지도를 출력하는 작업을 성공하였다.(성공한 호스트 주소: http://localhost:8000/map.html) 이유는 아마도
서버 보안 문제로 알맞는 서버를 사용하여 api 데이터를 가져와야먼 하는것이 아닐까 추측해봄. (이유를 아직도 잘 모르겠다..)
- [x] 240418(금) 오늘 작업한 내용:
카카오 API를 이용해서 카카오 지도 데이터와 마커를 표시해서 위도 경도 위치정보를 표시하는 일련의 작업들을 수행했다.      
이벤트를 html태그 어디에다가 적용하는지 메세지를 어느 div태그에 뿌리는지 알수 없어서 태그 하나를 열어 id='result'로 적용하니 카카오 맵 API 위 경도 위치 정보를 마커가 표시되며 이벤트까지도 안전하게 작업을 수행할 수 있었다. (단 현재는 테스트로 파이선 내장 http 서버를 사용하여 html 파일을 로드해 출력한 React로 옮기는 이전단계의 작업임.)
적용한 소스코드이다. 


```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Kakao Maps Example</title>
    <!-- <script type="text/javascript" src="./kakaoAPI.js"></script> -->
    <script type="text/javascript" src="kakao/kakaoAPI.js"></script>
    <!-- <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey={여기에인증키들어감}"></script> -->


   
 </head>
 <body>
    <h1>Kakao Maps in Action</h1>
    <div id="map" style="width:500px;height:400px;"></div>
    
    <script type="text/javascript">


        // 자동 로드를 비활성화하고 API가 준비된 후 지도를 초기화합니다.
        kakao.maps.load( function() {
		//window.onload = function() {
            var container = document.getElementById('map');
            var options = {
                // 37.576851,   126.973191
                //center: new kakao.maps.LatLng(33.450701, 126.570667),
                center: new kakao.maps.LatLng(37.576851, 126.973191),
                level: 3
            };
            var map = new kakao.maps.Map(container, options);

            var marker = new kakao.maps.Marker({ 
            // 지도 중심좌표에 마커를 생성합니다 
            position: map.getCenter() 
          }); 
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
        
        // 클릭한 위도, 경도 정보를 가져옵니다 
        var latlng = mouseEvent.latLng; 
    
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);    
        
        var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다~!!';
        
        var resultGeoposition = document.getElementById('result'); 
        resultGeoposition.innerHTML = message;
    
    });
        });
    </script>
    <div id="result" style="width:500px;height:400px;">여기에 지도 위치 정보를 표시합니다.</div>
</body>
</html>

 ```

- [x] 240418(금) 오늘 작업한 내용:
 React로 map.html 카카오 지도 데이터 소스를 리엑트 코드로 변환하여 React 서버에서 수행을 해보니, 글자는 출력되는 듯하는데 src= 의 api key 정보를 받아올수 없는 듯한 에러를 발생시켰다. GPT에게 물어봤지만, 딱히 명확한 수확이 없었고, kakao api로드가 정의 되있지 않다고 하는 Error문구를 계속해서 확인할 수 있었다.. 혹시 서버보안 문제나 데이터를 정확히 가지고 오지는 못하는 뭔가 내부적인 오류가 있는것이 분명하다.. 역시 kakao api를 기지고 올때 중요한건 satae문제가인가? 싶다.. 뭔가 시원한 해결 방법론은 없을까? 구글애 물어봐야겠다.
- [x] 240418(금) 오늘 작업한 내용:
구글에 문의하니 스크립트 로드전에 window 객체에 먼저 접근하라고 함.. 에러는 없어졌는데 지도는 확인이 안됨. 월요일에 다시 시도해 봐야겠다. 



- [x] 240422(월) 오늘 작업한 내용:
  map.html 파일은 지도 데이터 및 각 장소를 마커하면 위도, 경도도 함께 확인할수 있는데, React로 적용시 스크립트 내부의 로드로 추측돠는 그러한 오류가 발생한다. 구글 검색을 통하여 해결방법을 찾아본다.. 
- [x] 240422(월) 오늘 작업한 내용:
  여진씨 요청으로 차트를 화면에서 출력하는데 어떤 의미를 알수 없는 
  내부 arc 라는 속성을 찾을수 없다, 정의가 안되어있다. 라는 내부 코어
  (라이브러리 오류라고 추측이 됨.)오류 문구가 발생되어짐. GPT에 문의해보니 react-chart 무슨무슨 버젼오류다 차트라이브러리가 설치가 잘못되어 그런 현상이 발생되어진것 같다고 해서 npm으로 차트를 다시 재설치를 하였지만, 이미 패키지가 설치 되어있어서 그 부분에 대한 오류는 아닌것으로 판단됨, 그래서 구글에 검색해보고 차트 컴포넌트를 다시 그리는 코드를 찾아 테스트 해보았더니 그래도 오류가 발생, 다시 자세히 보니 import 에서 변수명이 뭔가 잘못되어진 것인가 생각이들어 
  변수면을 소문자로 변경해서 다시 실행해보니 해당 arc에 관한 오류는 사려졌다. 차트는 아무래도 data 불러오는 데 값을 가지고 오지 못해서 콤포넌트가 실행이 안되었던 듯하다. 전단계는 해결되었다. 이상이다. 
- [x] 240422(월) 오늘 작업한 내용:
  React로 소스를 통째로 받아 apiKey 값을 대입하여 가지고 오려니 process.env 의 환경변수라는 값의 세팅을 받아 관련 apiKey={{apiKey}} 값을 파라메터 데이터로 넘겨주면 지도가 로드가 되어 카카오 멥이 실행되어질까? 아직 구조를 파악하지 못해 난해한 부분이 있어 원빈PM께서 도움을 요청했다. 흔쾌히 수락하였고, 본인도 로딩하는 부분을 값을 제대로 받아서 가지고 올려면 어느정도 연구는 해봐야 한다고 한다. 내일 중으로 관련 이슈는 해결될듯 싶다. 나는 거래와 위치정보가 함께 나올수 있는 화면 출력 서비스를 한번 구현해보기로 하였다. 


- [x] 240423(화) 오늘 작업한 내용:
  flask 서버에서 api를 가지고 오기위한 카카오 맵 화면에서 백엔드 쪽 데이터서버에서 데이터를 받아와 
  요청 값을 처리하는데 필요한 데이터를 처리하기 위한 첫 단계로 단계적 테스트를 진행하였다. map.html 파일에서 javaScript로 해당 서버 url을 요청했고, flask 백엔드 서버에서 get(self): 함수로 임의 문자열 배열 데이터를 정의하여 그 해당값을 info라는 key 이름으로 받아 배열 데이터를 불러 들이는데 flask 테이터서버 서비스를 이용하여 해당 데이터열을 /budong_info 요청 주소로 값을 응답받는 것을 확인 할수 있었다.
- [x] 240423(화) 오늘 작업한 내용:
  이를 React로 구현하기에는 아직 기술을 충분히 습득하지 못했기 때문에 차후작업으로 미루고, 우선 먼저 map.html 파일에서 카카오 데이터를 실행한뒤 부동산 매매 정보를 임의 값으로 넣어놓고 화면을 스크립트로 구현하는 작업을 수행하였고, 데이터는 const data = {키: "값",키: "값",키: "값",키: "값"...} 이런식으로 데이터가 출력되는 것을 확인 할수 가 있었다.   
- [x] 240423(화) 오늘 작업한 내용:
  두번째 작업을 완료한 후 flask 에서 요청 받은 문자열 데이터를 버튼을 이용해서 새페이지를 호출하여 문자 데이터열을 잘 받아오는지 확인을 했는데 버튼을 입력했더니 응답 데이터가 잘 들어오는 것을 확인하여 이후 Rect로 적용시 flask 에서 요청 받은 데이터를 잘 처리할수 있는 전단계 작업을 완료 할수 있었습니다. 
- [x] 240423(화) 오늘 작업한 내용:
  플라스크 에서 OpenAPI값을 잘 받아와 이후 오라클에서 DB를 적재하고 백엔드 데이터를 넘겨주는 구조를 파악을 해볼 예정입니다.


- [x] 240424(수) 오늘 작업한 내용:
  map.html 에서 부동산 관련 정보를 데이터열인 data =[{}] 에 저장해두고 
  버튼을 이용해 클릭하면 해당 URL주소와 +?파라미터 GET 요청으로 데이터를 전달 받을수 있나 javaScript 소스코드를 구현을 해보았다. 소스코드를 참고자료로 업데이트 해 놓겠다.
  하위 내용은 자바스크립트 와 관련 html 코드다.
-- map.html --

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Kakao Maps Example</title>
    <!-- <script type="text/javascript" src="./kakaoAPI.js"></script> -->
    <script type="text/javascript" src="kakao/kakaoAPI.js"></script>
    <!-- <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey={이곳에 인증키}"></script> -->
</head>
<body>
    <h1>Kakao Maps in Action</h1>
    <div id="map" style="width:500px;height:400px;"></div>
    <div id="budongInfo" style="width:500px;height:400px;">여기에 부동산 정보를 표시합니다.

        <table border="3" id="dataTable" >
            <thead>
            <tr>
                <th>번호</th>
                <th>건물면적</th>
                <th>용도지역</th>
                <th>위도</th>
                <th>경도</th>
                <th>주소</th>
                <th>주소지역</th>
            </tr>
            </thead>
            <tbody>
            <!-- JavaScript를 통해 여기에 데이터가 삽입 -->
            </tbody>
        </table>
    </div><br>
    <div id="result3" style="width:500px;height:400px;"><input id="sending" type="button" onclick="sendData()" value="Send Data" /></div>
    <script type="text/javascript">

        // 자동 로드를 비활성화하고 API가 준비된 후 지도를 초기화합니다.
        kakao.maps.load( function () {
            //window.onload = function() {
            var container = document.getElementById('map');
            var options = {
                // 37.576851,   126.973191
                //center: new kakao.maps.LatLng(33.450701, 126.570667),
                center: new kakao.maps.LatLng(37.576851, 126.973191),
                level: 3
            };
            var map = new kakao.maps.Map(container, options);

            var marker = new kakao.maps.Marker({
                // 지도 중심좌표에 마커를 생성합니다
                position: map.getCenter()
            });
            // 지도에 마커를 표시합니다
            marker.setMap(map);

            // 지도에 클릭 이벤트를 등록합니다
            // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
            kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

                // 클릭한 위도, 경도 정보를 가져옵니다
                var latlng = mouseEvent.latLng;

                // 마커 위치를 클릭한 위치로 옮깁니다
                marker.setPosition(latlng);

                var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
                message += '경도는 ' + latlng.getLng() + ' 입니다~!!';

                var resultGeoposition = document.getElementById('result');
                resultGeoposition.innerHTML = message;

            });
        });

        // 예제 데이터 배열
        const data = [
            {번호: 1, 건물면적: 680.83, 용도지역: "제1종일반주거", 위도: 37.5806949 ,경도: 126.9827989 , 주소: "통의동"  , 주소지역: "종로구" },
            {번호: 2, 건물면적: 680.83, 용도지역: "제1종일반주거", 위도: 37.5806949 ,경도: 126.9827989 , 주소: "통의동"  , 주소지역: "종로구" },
            {번호: 3, 건물면적: 680.83, 용도지역: "제1종일반주거", 위도: 37.5806949 ,경도: 126.9827989 , 주소: "통의동"  , 주소지역: "종로구" }

        ];


        // "건물면적": 680.83,
        //     "경도": 126.9827989,
        //     "용도지역": "제1종일반주거",
        //     "위도": 37.5806949,
        //     "주소": " 통의동",
        //     "주소지역": "종로구"

        // 테이블의 tbody 요소를 선택
        const tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

        // 데이터 배열을 순회하면서 테이블 행을 추가
        data.forEach(function (item) {
            const row = tbody.insertRow(); // 새 행 추가
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(5);


            cell1.innerHTML = item.번호;   // 번호
            cell2.innerHTML = item.건물면적; // 건물면적
            cell3.innerHTML = item.용도지역;  // 용도지역
            cell4.innerHTML = item.위도;  // 위도
            cell5.innerHTML = item.경도;  // 경도
            cell6.innerHTML = item.주소;  // 주소
            cell7.innerHTML = item.주소지역;  // 주소지역
        });
        
         
       function directToUrl() {
        // 여기에 이동하고 싶은 URL을 입력하세요.
           var url = "http://localhost:4000/budong_info";
           // var url = "http://localhost:4000/";
           console.log(url);
        // var button = document.getElementById('inputInfo');
        // 페이지 리디렉션
        window.location.href = url;
    }


        function createURL(item) {
            const baseURL = "http://localhost:4000/search";

            const urls = data.map( item => {
            const queryParams = new URLSearchParams({
                    number: item.번호,
                    area: item.건물면적,
                    usage: item.용도지역,
                    latitude: item.위도,
                    longitude: item.경도,
                    address: item.주소,
                    region: item.주소지역
            });
            console.log( "queryParams  ====> {}", queryParams.toString());
            const sendUrl = `${baseURL}?${queryParams.toString()}`;
            return sendUrl;
            });
            return urls;
        }

        // 사용 예
        // console.log(createURL(data));

        function sendData() {
            console.log( "data{} ===> ",data);
            document.getElementById('sending').addEventListener('click', function(event) {
                const request = "http://localhost:4000/search";

                data.forEach(item => {
                    const sendingURL = createURL(item);
                    fetch(sendingURL, { method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }) // GET 메소드를 사용하며, 서버가 이를 처리할 수 있어야 함
                        .then(response => response.json())
                        .then(data => {console.log(`Data sent successfully: ${JSON.stringify(data)}`);return data})
                        .catch(error => console.error('Error sending data:', error));
                });
                window.location.href = "http://localhost:4000?sendData=" + JSON.stringify(data);
                event.stopPropagation();
            });

        }

    </script>
    <div id="result" style="width:500px;height:400px;">여기에 지도 위치 정보를 표시합니다.</div>
    <div id="result2" style="width:500px;height:400px;"><input type="button" onclick="directToUrl()" value="데이터넘기기" >
    </div>

</body>
</html>
```

- [x] 240424(수) 오늘 작업한 내용:
  소스코드를 구현중에 한가지 의문점이 든것은, fetch() 라는 함수였는데 GPT에 검색해서 알아보니, 서버와 비동기적으로 통신할 수 있게 하는 함수라고 한다. 
  fetch 함수를 이용해서 http 요청을 보내고 받는 기술인것 같은데, 문제는 json을 설정을 해놓아도 문자열로 반환을 해주는지 에 대한 부분에서 기억은 안나는데 Type Error 가 발생했는데 다시 페이지를 열러고 하니 보안 문제 때문에 url 주소에 json 데이터 타입의 문자열로 ?sendData= 이런식을 값은 반환이 되는데 이건 claen한 소스코드 구현은 아닌것 같아 자꾸 의문점이 든다..
- [x] 240424(수) 오늘 작업한 내용:
  아마도 반환 받는 값이 문자열로 변경해야 타입이 알맞게 들어갈꺼 같아, JSON.stringify(data)를 반환해서 결과 값을 리턴 받는것을 시도하였는데, 데이터는 잘받아오나, 타입이 클릭 이벤트 발생시 적어도 한번은 Type Error 를 출력하는데, 우선 데이터는 무사히 잘 넘어오는 것을 확인 할수 있었다. 
- [x] 240424(수) 오늘 작업한 내용:
  sendData() 함수를 호출할때 뭔가 이벤트가 함께 발생 되는것 같아, 이벤트 버블링 현상을 막기 위해 event.stopPropagation(); 함수를 사용해서 이벤르 버블링 현상을 막는것을 소스를 수정,보완하여 시도하였다.
- [x] 240424(수) 오늘 작업한 내용:
  detail.html을 만들어 HTML 새 페이지를 호출하려고 javaScript로 만들려고 했지만, fetch를 사용했으나 url을 문자열로만 인식하고, 해당 웹 페이지가 존재하지 않기 때문에 값을 detail.html 페이지에 뿌릴수 없었다. 그럼 flask쪽에서 서버가 구현되어 있으니깐, 플라스크로 요청을 시도해볼까 라는 
  라는 의심으로 python flask 서버에서 class Detail(Resource): 리소스 클래스를 상속받아 add_resource(Detail, "/detail") 을 호출해 웹 페이지를 달라고 요청하니 map.html 파일에서 fetch 가 구현되었고 url주소상에서 파라미터 값으로 해당 부동산정보 데이터를 전부 가지고 오는것을 확인하였다.
- [x] 240424(수) 오늘 작업한 내용:
  flask 서버에서 데이터 정보들을 가지고와 detail.html 파일을 불러오는데 어떤 필요한 것이 있을까 찾아보니 render_template() 라는 함수를 이용하면 html 파일을 찾아서 반환해준다는 것을 확인하였다. 사용방법은 import render_template 모듈을 선언하여 사용하니 html파일을 불러올수 있었다. 다만, 스크립트 소스코드로 인식해서 파일 원본 소스코드 전체 반환되니 테스트는 성공하였으나, html 태그를 브라우저에서 화면을 랜더링하는 것은 할수없었다.
- [x] 240424(수) 오늘 작업한 내용:
  flask 에서 html 태그를 그릴수 없었던 이유는 make_reponse() 함수를 import 플라스크에 make_response를 선언하여 response = make_response(html 파일명) 을 가지고 와  ['Content-Type'] = 'text/html' 을 정의하지 않았기 때문에 해당 파일이 html태그를 인식하지 못하기에 발생한 문제였다. 소스를 수정하고 return response 를 호출하니 url주소로 string JSON 문자열을 가지고 오고 detail.html 파일을 출력 할수 있었다. 
  참고차 추가딘 소스코드를 올린다. 

  ```python 
  class Detail(Resource):
    def get(self):

        data = [
            {"번호": 1, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" },
            {"번호": 2, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" },
            {"번호": 3, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" }
        ]
        # return {"data": data}, 200
        html = render_template('detail.html')
        # make_response를 사용하여 응답 객체 생성
        response = make_response(html)

        response.headers['Content-Type'] = 'text/html'
        
        return response

  ```
  다만 스크립트에서 html 태그를 그릴수 없어서 해당 데이터 열들을 화면에 그릴수 가 없었는데 이부분은 
  이후 찾아보고 고쳐보겠다. (원빈씨가 방법을 찾았는데 화면에 데이터를 받아올수 없었던 이유는 render_template('detail.html',data=data) 2두번째 인수에 data를 딕셔니리 타입으로 명시하지 않았기에 데이터를 불러 올수 없었던 이슈 였다. 해당 데이터를 페이지에서 값을 잘 담아올수 있는 것을 확인하고 오늘 작업 수행을 완료한다.)그리고 개발자 도구에서 네트워크 탭을 열어 관련 데이터 값을 가지고 오는지를 확인하는 방법에대한것도 피드백을 받아 앞으로는 네트워크 쪽을 보는 습관도 가져야 겠다라고 생각했다.


- [x] 240425(목) 오늘 작업한 내용:
  공공데이터 포털을 이용하여 부동산 년도별 허가거래 관련한 api정보를 
  인증키의 받아 openAPI를 호출하여 해당 데이터 정보들을 result_type=json
  으로 불러와 api를 응답받고, 해당 ETL 관련한 작업을 수행하기 전에 필요한 정보들을 추출하여 데이터를 전처리하고 분석하는 작업을 수행하기위해 pandas 에서 작업을 진행하기로 하였다. 필요한 작업을 수행하기 위해 년도별 부동산 허가거래 관련 정보를 csv 파일로 불러와 read_csv()로 데이터프레임(DataFrame)으로 변경하여 데이터 가공처리를 편리하기 위해 사전작업을 진행하였고 데이터를 불러오니 우선 데이터베이스처럼 데이터프레임이 잘 출력 되었는데 원하는 정보들을 모아서 필요한 요소들만 가지고 오는것이 기술적 한계를 느껴 고민을 해본후 원빈씨에게 요청에 데이터 가공처리를 도움을 받았다. 나는 년도별로 각지역으로 합산을 해서 나눠 데이터를 분류하게 되면 해당 데이터를 가지고 올수 있겠다고 생각했는데, 결과값이 주소와 지역정보가 전부 문자가 합쳐진 이상한 출력결과가 나왔다. 피드백을 받았는데 허가면적,전체면적을 각각 합산하여 데이터를 출력했더니 한개의 행만 검색이 되었는데, 물어보니 df['허가면적비율']이란 컬럼명을 하나 추가해서 그것을 백분율로 나누고, 100* 
  df['허가면적'] /['전체면적'] 으로 비율을 계산하여 그 결과 값을 ['허가면적비율']에 대입하여 조건을 주는데 식을 이렇게 적용하였다. 
  'User
  df2022.loc[:, '허가면적비율']가 
  90 이상이면 'A'
  70~90 사이면 B
  30~70 사이면 C
  30보다 낮으면 D'     
  이런식으로 조건을 추가 해주었더니 GPT에서 적용할수 있는 코드를 출력해주었는데 관련 python pandas 적용 예시코드를 업데이트하겠다. 

  ```python
  df2022 = df[df['년도']==2022]   # 2022년도 부동산 거래 년도별 허가처리 정보만을 검색하여 출력한다.
  df2022.loc[:, '허가면적비율'] = 100*df2022['허가면적'] / df2022['전체면적'] 

 # 조건에 따라 카테고리 열 할당
 conditions = [
    df2022['허가면적비율'] >= 90,
    df2022['허가면적비율'].between(70, 90, inclusive="both"),
    df2022['허가면적비율'].between(30, 70, inclusive="both"),
    df2022['허가면적비율'] < 30
 ]

 # 해당 조건에 맞는 카테고리 레이블
 choices = ['A', 'B', 'C', 'D']

 # np.select를 사용하여 카테고리 열 생성
 df2022.loc[:, '카테고리'] = np.select(conditions, choices, default='NAN')
 df2022

```
해당 정보는 이렇게 카테고리 컬럼을 추가하여 각각을 등급별로 나누어 필요한 데이터들을 추출할수 있었다.
- [x] 240425(목) 오늘 작업한 내용:
오전엔 부동산 데이터를 분석하기위한 물밑작업으로 지난번 미세먼지농도 원인분석을 한 다른조의 실습 데이터로 분석을 진행하고, 오후엔 샘플 데이터를 토대로 부동산 api를 요청하고 데이터를 받아와 데이터 추출을 위한 전처리 분석 가공 작업을 진행하였다. 한가지 이슈사항은 df['카데고리']별로 A,B,C,D 등급을 나누어 값을 가지고 와 총합을 카운트 해보았는데, 그중 3개의 행 데이터가 NaN데이터 가 있었다. 데이터를 가지고 오기위한 사전 작업으로 분명 결측치데이터를 삭제하고, 가지고 왔는데, NaN값이 왜 3개가 남았지? 라고 의문이 들어 특정열에서 NaN값을 이런식으로 nan_rows = 
df2022[df2022['카테고리'].isna()]
print(nan_rows) 조회해 보았는데.. 결국은 아무것도 출력되지 않았다. 원인은 내일 분석을 진행해 봐야겠다.


- [x] 240426(금) 오늘 작업한 내용:
금요일 개인사정으로 결석함.


- [x] 240429(월) 오늘 작업한 내용:
dataframe을 통계와 집계함수로 출력된 결과값을 가지고 그래프를 시각화라이브러리를 사용하여 통계 그래프를 생성한다.
우선 matplolib 모듈을 적용하여 import로 선언한후 ['카테고리] 별 데이터를
배열로 받아온 후 category_data 라는 객체의 kind='bar'  타입으로 x.label, y.label 을 정의한 후 legend(title='카테고리') 로 설정한후 plt.show()함수로 호출하여 막대 그래프를 그린다.
아래는 pandas 사용하여 소스로 구현한 예시코드이다. 

```python
  # 카테고리별 데이터만 선택
  category_data = monthly_data[['A', 'B', 'C', 'D']]

  # 그래프 그리기
  fig, ax = plt.subplots(figsize=(10, 7))
  category_data.plot(kind='bar', ax=ax)
  ax.set_title('2022년 A,B,C,D등급별 카테고리별 데이터')
  ax.set_xlabel('년도')
  ax.set_ylabel('개수')
  ax.legend(title='카테고리')
  plt.xticks(rotation=0)  # x축 레이블을 가로로 표시
  plt.show()

```
- [x] 240429(월) 오늘 작업한 내용:
  그래프를 그린후 출력한 그래프가 너무 딱 붙어서 나오길래 여기에 그래프
  를 ax.bar()함수를 사용하여 그래프 간격을 조정했다. (chat GPT에 문의를 해봄..) 예를 들면 ax.bar(x - width*1.5, category_data['A'], width, label='A') 이런 형식의 값을 설정할 수 있었고, 결과는 간격이 일정하게 적용되는 '각 카테고리별 데이터'를 가지고 올 수 있었댜. 
  아래는 바 그래프의 넓이 간격을 조정한 pyhton 그래프 소스코드이다. 

```python 
 # 데이터 준비
category_data = monthly_data[['A', 'B', 'C', 'D']]

# 그래프 크기 설정
fig, ax = plt.subplots(figsize=(10, 7))

# 바 간격 조절
width = 0.2  # 바의 너비
x = np.arange(len(category_data))  # 카테고리 수 만큼의 x 위치 배열 생성

# 각 카테고리별로 바 플롯 생성
ax.bar(x - width*1.5, category_data['A'], width, label='A')
ax.bar(x - width*0.5, category_data['B'], width, label='B')
ax.bar(x + width*0.5, category_data['C'], width, label='C')
ax.bar(x + width*1.5, category_data['D'], width, label='D')

# 각 카테고리별로 바 플롯 생성, 여기서 바 간 간격을 조정
# ax.bar(x - width*2, category_data['A'], width, label='A')
# ax.bar(x - width, category_data['B'], width, label='B')
# ax.bar(x, category_data['C'], width, label='C')
# ax.bar(x + width, category_data['D'], width, label='D')

# 축 설정
ax.set_xlabel('년도')
ax.set_ylabel('개수')
ax.set_title('2022년 A, B, C, D등급별 카테고리별 데이터')
ax.set_xticks(x)
ax.set_xticklabels(category_data.index)  # x축 라벨 설정, monthly_data의 인덱스를 사용
ax.legend(title='카테고리')

# x축 레이블 회전
plt.xticks(rotation=0)

# 그래프 표시
plt.show()

```

- [x] 240429(월) 오늘 작업한 내용:
  이후 해당 막대 그래프를 가지고, 카테고리 A,B,C,D 등급별 데이터를 지도에 표시하는 예시 코드를 작성하여 출력하는 소스코드를 작성하였다.
  참조한 부동산 년도별 허가처리 정보에는 지도데이터인 위도, 경도 데이터가 없는 관계로 인위적으로 위도, 경도 데이터를 삽입해 folium 라이브러리 모듈을 사용하여 지도 데이터를 그려왔다. 
  이와 관련한 소스코드도 참고자료로 올린다. 
```python 

  data = {
    '카테고리': ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'D'],
    '위도': [37.57, 37.55, 37.56, 37.54, 37.57, 37.56, 37.55, 37.54, 37.57, 37.56],
    '경도': [126.97, 126.96, 126.98, 126.99, 126.95, 126.97, 126.96, 126.98, 126.99, 126.95]
}
df = pd.DataFrame(data)

# 기본 지도 생성
map = folium.Map(location=[37.56, 126.97], zoom_start=12)

# MarkerCluster 객체 생성
marker_cluster = MarkerCluster().add_to(map)

# 데이터프레임을 반복하여 각 데이터에 대한 마커 생성
for idx, row in df.iterrows():
    tooltip = f"<strong>카테고리: {row['카테고리']}</strong>"  # HTML 형태의 툴팁 내용
    folium.Marker(
        location=[row['위도'], row['경도']],
        popup=f"카테고리: {row['카테고리']}",  # 팝업에 표시될 텍스트
        tooltop=tooltip,
        icon=folium.Icon(icon='ok', color='blue')
    ).add_to(marker_cluster)

    #  마커에 표시될 HTML 코드 작성
    # html = f"<div style='display:flex; flex-direction:column; align-items:center; justify-content:center; font-size:10pt; text-align:center; font-weight:bold;'>{route}<br>{int(route_data['교통량'].mean())}</div>"
    
    # 마커 생성하여 지도에 추가
    # folium.Marker(location=[latitude, longitude],
    #               icon=folium.DivIcon(html=html)).add_to(map)

# 지도 출력
# map


# 지도를 HTML 파일로 저장
map.save('map_with_tooltips.html')

# 지도 출력 (주피터 노트북이나 콜랩에서 실행하는 경우)
map

```

- [x] 240429(월) 오늘 작업한 내용:
  부동산 년도별 허가 처리 정보를 기존의 데이터에는 위도 경도 데이터가 존재하지 않아 방법을 고민해 본 결과 python에서 제공하는 geopy.geocoder 맵 라이브러리를 사용하여 '주소', '시도명', '시군구명'으로 위도, 경도 정보를 json_data데이터 열에 먼저 키,값으로 데이터를 담고, 
  그 해당하는 '지역' 및 '주소'로 반환되는 결과 데이터 정보를 새로운 resultJson이라는 빈 배열 변수를 선언하여 for반복문을 통해 각각 json으로 받아온 데이터 배열을 resultJson열에 담아 온 후 geocoder 에서 받아온 해당 위치정보(위도, 경도) 데이터를 맞 바꾸어 '지역'으로 
  정의 해 놓은 위치 위도, 경도 위치 수치 데이터를 반환받았다. 결과를 출력해 보니, 와우 부동산 년도 별 허가처리 정보에 대한 위도,경도 정보가 정확히 출력 되었다. 
  구현왼료 된 소스코드도 참고 자료차 올린다.
```python
import folium
from folium.plugins import MarkerCluster
import json

# JSON 데이터
json_data = '''
{
    "data": [
        {"허가면적": 120, "법정동": "서울특별시 강남구 역삼동", "시도명": "서울특별시", "시군구명": "강남구", "위도": 37.497, "경도": 127.027},
        {"허가면적": 150, "법정동": "서울특별시 서초구 서초동", "시도명": "서울특별시", "시군구명": "서초구", "위도": 37.483, "경도": 127.032},
        {"허가면적": 100, "법정동": "서울특별시 종로구 종로1가", "시도명": "서울특별시", "시군구명": "종로구", "위도": 37.570, "경도": 126.980},
        {"허가면적": 90, "법정동": "서울특별시 동작구 신대방동", "시도명": "서울특별시", "시군구명": "동작구", "위도": 37.487, "경도": 126.913}
    ]
}
'''

# JSON 데이터 파싱
parsed_data = json.loads(json_data)

# 데이터프레임 생성
df1 = pd.DataFrame(parsed_data['data'])

# 카테고리 조건 설정
conditions = [
    (df1['허가면적'] >= 120),
    (df1['허가면적'] >= 100) & (df1['허가면적'] < 120),
    (df1['허가면적'] >= 90) & (df1['허가면적'] < 100),
    (df1['허가면적'] < 90)
]

# 카테고리 선택
categories = ['A', 'B', 'C', 'D']

# 카테고리 열 추가
df1['카테고리'] = pd.cut(df1['허가면적'], bins=[0, 90, 100, 120, float('inf')], labels=categories, right=False)

# 데이터프레임 출력
print(df1)

# 임의의 JSON 데이터를 가지고 데이터 허가면적에 해당하는 등급을 카테고리 
# A,B,C,D 등급으로 나누어 '카테고리' 데이터를 추가해 출력한다.

# 데이터프레임에서 JSON 데이터로 변환하여 출력한다.
json_result = df1.to_json(orient='records', force_ascii=False)

# 결과 출력
print(json_result)


# 지도 정보 위도.경도 데이터 정보를 반환
from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent='chiricuto')

# JSON 데이터
json_data = '''
{
    "data": [
        {"허가면적":120,"법정동":"서울특별시 강남구 역삼동","시도명":"서울특별시","시군구명":"강남구","위도":37.497,"경도":127.027,"카테고리":"D"},
        {"허가면적":150,"법정동":"서울특별시 서초구 서초동","시도명":"서울특별시","시군구명":"서초구","위도":37.483,"경도":127.032,"카테고리":"D"},
        {"허가면적":100,"법정동":"서울특별시 종로구 종로1가","시도명":"서울특별시","시군구명":"종로구","위도":37.57,"경도":126.98,"카테고리":"C"},
        {"허가면적":90,"법정동":"서울특별시 동작구 신대방동","시도명":"서울특별시","시군구명":"동작구","위도":37.487,"경도":126.913,"카테고리":"B"}
    ]
}
'''

dataOpenAPI = json.loads(json_data)
items = dataOpenAPI.get('data', [])

# geolocator = Nominatim(user_agent="myGeocoder")

resultJson ={'data':[]}

# items = dataOpenAPI.get('data', {})
# print(items)

for item in items:
    location = geolocator.geocode(item['시군구명'])
    # print(location)
    if location:
        resultJson['data'].append({
            '허가면적': item.get('허가면적'),
            '법정동': item.get('법정동'),
            '시도명': item.get('시도명'),
            '시군구명': item.get('시군구명'),
            '위도': location.latitude,
            '경도': location.longitude,
            '카테고리': item.get('카테고리')
        })
    else:
        print(f"위치를 찾을 수 없습니다: {item['시군구명']}")

mapData = json.dumps(resultJson, ensure_ascii=False)
print(mapData)


parsed_data = json.loads(mapData)

# 데이터프레임 생성
df = pd.DataFrame(parsed_data['data'])


# 기본 지도 생성
map = folium.Map(location=[37.56, 126.97], zoom_start=12)

# MarkerCluster 객체 생성
marker_cluster = MarkerCluster().add_to(map)

# 데이터프레임을 반복하여 각 데이터에 대한 마커 생성
for idx, row in df.iterrows():
    tooltip = f"<strong>카테고리: {row['카테고리']}</strong>"  # HTML 형태의 툴팁 내용
    folium.Marker(
        location=[row['위도'], row['경도']],
        popup=f"카테고리: {row['카테고리']}",  # 팝업에 표시될 텍스트
        tooltop=tooltip,
        icon=folium.Icon(icon='ok', color='blue')
    ).add_to(marker_cluster)


# 지도를 HTML 파일로 저장
map.save('map_with_tooltips.html')

# 지도 출력 (주피터 노트북이나 콜랩에서 실행하는 경우)
map

```
이렇게 위도,경도 정보를 추가해 지도에서 마커 정보와 원하는 데이터 값을
출력하였다. 


- [x] 240429(월) 오늘 작업한 내용: 
  react-sdk 라는 kakao Maps API가 존재했는데 일반 JavaScript 파일보다 좀더 확실한 구현 방법인것 같다고 생각이 들어 해당 사이트의 튜토리얼 페이지를 보고 TypeScript로 생성된 지도 화면을 출력하기 위한
  새 프로잭트를 생성하였다. 초기 React.js 화면은 App.js 를 통하여 불러오는 것을 확인하였으나, 스크립트 코드를 추가하니 화면이 하얀색 바탕만 나오고 카카오 지도 생성하는 것에는 실패 하였다. 내일 오전에 시도해봐야 겠지만 아마도 가능성이 없을 듯 하다..이상 금일 업무 일지를 
  마치겠다.


- [x] 240430(화) 오늘 작업한 내용: 
  부동산 거래 데이터 정보를 가지고 온것을 오전엔 분명 확인 했는데, 데이터 오류인지 아니면 kakao 지도 API문제인지 확인을 해봐야 할것 같지만 랜더링 오류가 발생하여 스크립트 소스가 전부 실행이 안되는 불상사가 발생하였음. 중간 보고 날이라고 들었는데, 하는데 까지 해보고 
  아니면 소스 원상복귀를 해야 하갰음.

- [x] 240430(화) 오늘 작업한 내용: 
  다행히 어제 집에 귀가전 소스자료를 백업해 둔 것이 있어서 재빨리 원상 복귀를 하였고, 스크립트가 실행이되어 이상없이
  이벤트가 실행되어지니 지도를 불러왔고, 해당 정보를 화면에
  테이블 형태 리스트로 출력할 수 있었다. 단, flask 에서 잘 받아오는 데이터라 생각했었는데, 알고보니 스크립트에서 가지고
  오는 데이터 배열정보라는 것을 확인 할수 가 있었다. 
  관련 소스를 이곳에 업데이트 해둔다. 

 --map.html--
  ```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Kakao Maps Example</title>
    <script type="text/javascript" src="kakao/kakaoAPI.js"></script>
<!--     <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey={이곳에 인증키}"></script>-->
</head>
<body>
<h1>Kakao Maps in Action</h1>
<div id="result">여기에 지도 위치 정보를 표시합니다.</div><br>
<div id="map" style="width:500px;height:400px;"></div>
<div id="budongInfo" style="width:500px;height:400px;">여기에 부동산 정보를 표시합니다.

    <table border="3" id="dataTable" >
        <thead>
        <tr>
            <th>번호</th>
            <th>건물면적</th>
            <th>용도지역</th>
            <th>위도</th>
            <th>경도</th>
            <th>주소</th>
            <th>주소지역</th>
        </tr>
        </thead>
        <tbody>
        <!-- JavaScript를 통해 여기에 데이터가 삽입 -->
        </tbody>
    </table>
</div><br>
<div id="result3" style="width:500px;height:150px;"><input id="sending" type="button" onclick="sendData()" value="JSON데이터로 값 넘겨주기 Send Data" /></div>
<script type="text/javascript">

    // 자동 로드를 비활성화하고 API가 준비된 후 지도를 초기화합니다.
    kakao.maps.load( function () {
        //window.onload = function() {
        var container = document.getElementById('map');
        var options = {
            // 37.576851,   126.973191
            //center: new kakao.maps.LatLng(33.450701, 126.570667),
            center: new kakao.maps.LatLng(37.576851, 126.973191),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);

        var marker = new kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: map.getCenter()
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다~!!';

            var resultGeoposition = document.getElementById('result');
            resultGeoposition.innerHTML = message;

        });
    });

    // 예제 데이터 배열
    const data = [
        {"번호": 1, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" },
        {"번호": 2, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" },
        {"번호": 3, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" }
        // {"번호": 4, "건물면적": 345.28, "용도지역": "제2종일반주거", "위도": 37.5806949, "경도": 126.9827989,  "주소": "체부동",   "주소지역": "종로구" },
        // {"번호": 5, "건물면적": 14.34,  "용도지역": "일반상업",      "위도": 37.5806949, "경도": 126.9827989,  "주소": "당주동",   "주소지역": "종로구" },
        // {"번호": 6, "건물면적": 26.04,  "용도지역": "일반상업",      "위도": 37.5806949,  "경도": 126.9827989, "주소": "당주동",    "주소지역": "종로구"},
        // {"번호": 7, "건물면적": 728.18, "용도지역": "일반상업",      "위도": 37.5806949,  "경도": 126.9827989, "주소": "신문로1가",  "주소지역": "종로구"}

    ];


    // "건물면적": 680.83,
    //     "경도": 126.9827989,
    //     "용도지역": "제1종일반주거",
    //     "위도": 37.5806949,
    //     "주소": " 통의동",
    //     "주소지역": "종로구"

    // 테이블의 tbody 요소를 선택
    const tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    // 데이터 배열을 순회하면서 테이블 행을 추가
    data.forEach(function (item) {
        const row = tbody.insertRow(); // 새 행 추가
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(5);


        cell1.innerHTML = item.번호;   // 번호
        cell2.innerHTML = item.건물면적; // 건물면적
        cell3.innerHTML = item.용도지역;  // 용도지역
        cell4.innerHTML = item.위도;  // 위도
        cell5.innerHTML = item.경도;  // 경도
        cell6.innerHTML = item.주소;  // 주소
        cell7.innerHTML = item.주소지역;  // 주소지역
    });


    function directToUrl() {
        // 여기에 이동하고 싶은 URL을 입력하세요.
        var url = "http://localhost:4000/budong_info";
        // var url = "http://localhost:4000/";
        console.log(url);
        // var button = document.getElementById('inputInfo');
        // 페이지 리디렉션
        window.location.href = url;
    }


    function createURL(item) {
        const baseURL = "http://localhost:4000/search";

        const urls = data.map( item => {
            const queryParams = new URLSearchParams({
                number: item.번호,
                area: item.건물면적,
                usage: item.용도지역,
                latitude: item.위도,
                longitude: item.경도,
                address: item.주소,
                region: item.주소지역
            });
            console.log( "queryParams  ====> {}", queryParams.toString());
            const sendUrl = `${baseURL}?${queryParams.toString()}`;
            return sendUrl;
        });
        return urls;
    }

    // 사용 예
    // console.log(createURL(data));

    function sendData() {

        console.log( "data{} ===> ",data);
        document.getElementById('sending').addEventListener('click', function(event) {
            // const request = "http://localhost:4000/search";
            data.forEach(item => {
                const sendingURL = createURL(item);
                fetch(sendingURL, { method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }) // GET 메소드를 사용하며, 서버가 이를 처리할 수 있어야 함
                    .then(response => response.json())
                    .then(data => {console.log(`Data sent successfully: ${JSON.stringify(data)}`);return data})
                    .catch(error => console.error('Error sending data:', error));
            });
            window.location.href = "http://localhost:4000?sendData=" + JSON.stringify(data);
            event.stopPropagation();
        });

    }

    function sendDetail() {
        console.log("JSON.stringify(data)====> ", encodeURIComponent(JSON.stringify(data)));
        const dataJSON = encodeURIComponent(JSON.stringify(data));
        var pageUrl = 'http://localhost:4000/detail';
        fetch(pageUrl, {
            method: 'HEAD'  // HEAD 메소드는 문서의 헤더만 가져옵니다.
        })
            .then(response => {
                if (response.ok) {
                    // 페이지가 존재하면 해당 URL로 이동
                    // window.location.href = pageUrl + '?dataJSON=' + dataJSON ;
                    window.location.href = 'http://localhost:4000/detail?data=' + dataJSON;
                } else {
                    // 페이지가 존재하지 않으면 대체 URL로 이동
                    window.location.href = 'http://localhost:4000/fallback.html';
                }
            })
            .catch(error => {
                // 네트워크 오류 처리
                console.error('Network error:', error);
                window.location.href = 'http://localhost:4000/fallback.html';
            });
    }

    // window.onload = sendDetail;


</script>

<div id="result2"><input type="button" onclick="directToUrl()" value="데이터넘기기" ></div>
<button onclick="sendDetail()">Send Data to Details Page => flask </button>

</body>
</html>

```

이건 페이지 하나를 생성해서 url주소로 (route)라우팅 해온 페이지 화면인 detail.html 구현 화면이다. 

```html 
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Data Receiver</title>
</head>
<body>

<!--<input type="button" onclick="getAndDisplayData()" value="여기에 데이터 출력" >-->
<div id="dataContainer">여기에 div 컨데이너1 정보가 들어옵니다.  </div>
<!--<div id="dataContainer1">여기에 div 컨데이너2 = {{ dict1 }}</div>-->
<h1>부동산 거래 허가 정보</h1>
<input type="button" onclick="getAndDisplayData()" value="여기에 데이터 출력">
<table id="dataTable" border="1">
    <thead>
    <tr>
        <th>번호</th>
        <th>건물면적</th>
        <th>용도지역</th>
        <th>위도</th>
        <th>경도</th>
        <th>주소</th>
        <th>주소지역</th>
    </tr>
    </thead>
    <tbody>
    <!-- 데이터 행은 여기에 동적으로 추가됩니다 -->

    </tbody>
</table>

<script type="text/javascript">

    // document.addEventListener("DOMContentLoaded", function() {
    //     // 페이지 로드 시 바로 데이터를 추출하고 표시
    //     displayDataFromQueryString();
    // });

    function getAndDisplayData() {
        // URL에서 쿼리 파라미터 'data' 추출
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        // const dataString = urlParams.get(encodeURIComponent(JSON.stringify(JSON.parse('{{ data | tojson | safe }}'))));
        const dataString = urlParams.get('data');
        console.log('Received queryString:', queryString);
        console.log('Received urlParams:', urlParams);
        console.log('Received dataString:', dataString);
        if (dataString) {
            try {
                // 쿼리 스트링의 'data' 값을 JSON 객체로 파싱합니다.
                const data = JSON.parse(decodeURIComponent(dataString));
                const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

                // 기존 행을 삭제
                tableBody.innerHTML = '';

                // JSON 데이터를 테이블 행으로 변환
                data.forEach(item => {
                    const row = tableBody.insertRow();
                    row.insertCell(0).textContent = item.번호;
                    row.insertCell(1).textContent = item.건물면적;
                    row.insertCell(2).textContent = item.용도지역;
                    row.insertCell(3).textContent = item.위도;
                    row.insertCell(4).textContent = item.경도;
                    row.insertCell(5).textContent = item.주소;
                    row.insertCell(6).textContent = item.주소지역;
                });
            } catch (error) {
                console.error("Error parsing JSON from URL:", error);
            }
        } else {
            console.error("No data parameter found in URL");
        }
    }
    // 페이지 로딩 완료 시 데이터 표시 함수 실행
    //  window.onload = displayDataFromQueryString;

    // function getAndDisplayData() {
    //     // URL에서 쿼리 파라미터 'data' 추출
    //     const queryString = new URLSearchParams(window.location.search);
    //     const dataString = queryString.get('data');
    //
    //     // 추출한 데이터를 디코드하고 JSON으로 파싱
    //     // const data = JSON.parse(decodeURIComponent(dataString));
    //     try {
    //         const data = JSON.parse(decodeURIComponent(dataString));
    //         console.log(" dataString:", data);
    //     } catch (error) {
    //         console.error("Parsing error:", error);
    //     }
    //     console.log("QueryString:", window.location.search);
    //
    //     // 화면에 데이터 표시
    //     const container = document.getElementById('dataContainer');
    //     data.forEach(item => {
    //         const content =   `number: ${item.번호},
    //                 area: ${item.건물면적},
    //                 usage: ${item.용도지역},
    //                 latitude: ${item.위도},
    //                 longitude: ${item.경도},
    //                 address: ${item.주소},
    //                 region: ${item.주소지역}`;
    //
    //         const element = document.createElement('p');
    //         element.textContent = content;
    //         container.appendChild(element);
    //     });
    //
    //
    // }

    // 페이지 로딩 완료 시 데이터 표시 함수 실행
    // window.onload = getAndDisplayData;

</script>

</body>
</html>

```

- [x] 240430(화) 오늘 작업한 내용: 
  결국 flask 에서 데이터를 파리미터 형식으로 불러와 사용하는 소스코드 구현이 요청하는 해당 json 문자열 값을 가지고 오지 못해 고민을 하던 중 원빈PM의 도움을 요청해 코드 분석을 의뢰했고, 답변을 받았는데, 파리터 값을 가지고 옰 없었는데 flask 서버 코드에서 class getData(Resource): 를 선언하고 get(self): 함수를 생성하여 필요한 정보를 data 변수로 dict{} 타입으로 각각의 데이터 행을 추가하여 배열로 감싸고, 그 값을 return data 로 인위적으로 반환 받아 자바스크립트에서 
  async 함수를 선언하여 fetch()함수에 인자로 'http://localhost:4000/getData'를 넣고 응답받는 데이터를 담아오기 위해 reponse.json() 을 호출하여 비동기를 명시하기 위한 await 를 fetch() 메소드 앞에 추가하여 data는 배열 형태의 값을 가지므로 forEach 반복문을 돌려 각각의 키 정보를 동적으로 데이터 행을 추가함으로써 html tbody 태그에 삽입하여
  리스트를 출력 시켰다. 콘솔에서 확인 결과 Promise 형식으로 값이 배열 형태로 잘 넘어오는 것을 확인할 수 있었으며 detail.html 화면에서 부동산 거래 허가 정보를 테이블 화면에서 리스트로 잘 출력할수 있었다.
  개선된 소스코드를 참고자료차 이곳에 업데이트 한다.

```python

from flask import Flask, request, jsonify, render_template, make_response
from geopy.geocoders import Nominatim
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from flask import current_app
import requests
import json
import random  # random 모듈 추가


class testAPI(Resource):
    def get(self):
        # 0. 기본 변수 가져오기
        url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade'
        access_key = '이곳에 인증키'
        # access_key2 = '이곳에 인증키'

        # 1. 요청정보 만들기
        url = url
        params = {
           'serviceKey': access_key, 
           'LAWD_CD': '11110', 
           'DEAL_YMD': '202305',
           '_type': 'json'
        }

        # 2. 해당 요청정보로 데이터를 가져온다.
        
        response = requests.get(url, params=params)
        dataOpenAPI =  json.loads(requests.get(url, params=params).text)
        # dataOpenAPI =  json.loads(response.text)
        # return response.text

        print(response)

        data = response.json()
        print(data)

        # 3. 가져온 데이터를 사용해서 결과물을 만든다.
        # resultJson ={'data':[]}
        # for i in range(len(dataOpenAPI['response']['body']['items']['item'])):
        #     resultJson['data'].append({
        #     # '건물면적' : dataOpenAPI['response']['body']['items']['item'][i]['건물면적'],
        #     '주소' : dataOpenAPI['response']['body']['items']['item']['법정동'],
        #     '주소지역' : dataOpenAPI['response']['body']['items']['item'][i]['시군구'],
        #     '용도지역' : dataOpenAPI['response']['body']['items']['item'][i]['용도지역']
        # })

        # 4. 결과물을 고객?에게 전달해준다. (리턴)
        # return resultJson

        resultJson ={'data':[]}
        items = dataOpenAPI.get('response', {}).get('body', {}).get('items', {}).get('item', [])
        
        geolocator = Nominatim(user_agent='chiricuto')
        for item in items:
            location = geolocator.geocode(item.get('시군구'))

            # print(f'AAAAAAA:',addr)  
            # latitude = location.latitude
            # longitude = location.longitude 
            # print(f'위도:',latitude)  
            # print(f'경도:',longitude)  
        
            # try:
            resultJson['data'].append({
                '건물면적': item.get('건물면적'),
                '주소': item.get('법정동'),
                '주소지역': item.get('시군구'),
                '용도지역': item.get('용도지역'),
                '위도':location.latitude,
                '경도':location.longitude
            })
            # except KeyError as e:
                # continue  # 또는 로그 찍기 등의 예외 처리
        # 결과를 JSON 문자열로 변환하여 반환
        # return json.dumps(resultJson, ensure_ascii=False)
        return jsonify(resultJson)
        


# class GeocordResource(Resource):
#     def get(self):
#         return searchAddress(request.args.get('address'))

# def searchAddress(address):
#     apikey = "652EC099-CCB3-350E-AE95-1C0262EBC36B"
#     apiurl = "https://api.vworld.kr/req/search?"
#     params = {
#         "service": "search",
#         "request": "search",
#         "crs": "EPSG:4326",
#         "query": address,
#         "type": "address",
#         "category": "road",
#         "format": "json",
#         "key": apikey,
#     }
    
#     response = requests.get(apiurl, params=params)
#     print(response)

#     data = response.json()
#     print(data)


#     result = {'data':[]}
#     if data.get('response') and data['response'].get('result') and data['response']['result'].get('items'):
#         for x in data['response']['result']['items']:
#             result['data'].append({
#                 '주소': x['address']['road'],
#                 '위도': x['point']['y'],
#                 '경도': x['point']['x']
#             })
#     else:
#         result['error'] = 'No results found'

#     return result

class BudongInfo(Resource):
           
    def get(self):
        
        item = ["청운동", "통의동", "체부동", "당주동", "신문로1가", "청진동", "수송동", "삼청동", "계동", "돈의동"]
        result = {'info': item}  # 모든 이름을 'info' 키에 리스트로 저장
        return result

        # temp =  ["상철", "영희", "철수", "미자", "준호", "수진", "태영", "지원", "민수", "서연"]
        # result ={'info':[]}
        # for i in temp:

            # 랜덤하게 이름 선택
            # budong_info = random.choice(i)
            # Api(app).add_resource(BudongInfo,'/budong_info')
            #  top_product = i
        # return {"name": top_product}
        #    info = {"name": i}
        # return info

class getData(Resource):
    def get(self):
        data =  [
           {"번호": 1, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" },
           {"번호": 2, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" },
           {"번호": 3, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" },
           {"번호": 4, "건물면적": 345.28, "용도지역": "제2종일반주거", "위도": 37.5806949, "경도": 126.9827989,  "주소": "체부동",   "주소지역": "종로구" },
           {"번호": 5, "건물면적": 14.34,  "용도지역": "일반상업",      "위도": 37.5806949, "경도": 126.9827989,  "주소": "당주동",   "주소지역": "종로구" },
           {"번호": 6, "건물면적": 26.04,  "용도지역": "일반상업",      "위도": 37.5806949,  "경도": 126.9827989, "주소": "당주동",    "주소지역": "종로구"},
           {"번호": 7, "건물면적": 728.18, "용도지역": "일반상업",      "위도": 37.5806949,  "경도": 126.9827989, "주소": "신문로1가",  "주소지역": "종로구"}
        ]
        return data

class Detail(Resource):
    def get(self):
        # return {"data": data}, 200
        html = render_template('detail.html')
        
        # make_response를 사용하여 응답 객체 생성
        response = make_response(html)

        response.headers['Content-Type'] = 'text/html'
        
        return response


def route_app(app):
   
    # 경로없이 들어오면 정적 파일 보여주기
    Api(app).add_resource(testAPI,'/')
    # api.add_resource(GeocordResource, '/getGeocord')
    Api(app).add_resource(BudongInfo,'/budong_info')
    Api(app).add_resource(getData,'/getData')
    Api(app).add_resource(Detail,'/detail')
    
    
def create_app():
    # Flask 객체 초기화
    app = Flask(__name__, template_folder='templates')

    # 정적 파일 디렉토리 설정
    app.static_folder = 'public'
    
    # URL 경로의 prefix 제거
    app.static_url_path = ''

    # CORS 적용
    CORS(app)  

    return app


app = create_app()
route_app(app)


# app.run : Flask 서버 구동, 기본 포트 5000번
if __name__ == "__main__":
    # serverConfig = {
    #     'host': 'localhost',
    #     'port': 4000, 
    #     'debug': True
    # }

    port = 4000
    print( f"서버 실행 |  http://localhost:{port}")
    app.run(host= '0.0.0.0',
        port= port, 
        debug= True)

```

---detail.html---
```html

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Data Receiver</title>
</head>
<body>

<!--<input type="button" onclick="getAndDisplayData()" value="여기에 데이터 출력" >-->
<div id="dataContainer">여기에 div 컨데이너1 정보가 들어옵니다. </div>
<!--<div id="dataContainer1">여기에 div 컨데이너2 = {{ dict1 }}</div>-->
<h1>부동산 거래 허가 정보</h1>
<input type="button" onclick="getAndDisplayData()" value="여기에 데이터 출력">
<table id="dataTable" border="1">
    <thead>
    <tr>
        <th>번호</th>
        <th>건물면적</th>
        <th>용도지역</th>
        <th>위도</th>
        <th>경도</th>
        <th>주소</th>
        <th>주소지역</th>
    </tr>
    </thead>
    <tbody>
    <!-- 데이터 행은 여기에 동적으로 추가됩니다 -->

    </tbody>
</table>

<script type="text/javascript">

async function getAndDisplayData() {
    try {
        // 쿼리 스트링의 'data' 값을 JSON 객체로 파싱합니다.
        const response = await fetch('http://localhost:4000/getData');
        const data = await response.json();

        
        // 기존 행을 삭제
        const tableBody = document
            .getElementById('dataTable')
            .getElementsByTagName('tbody')[0];

            // JSON 데이터를 테이블 행으로 변환
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = item.번호;
            row.insertCell(1).textContent = item.건물면적;
            row.insertCell(2).textContent = item.용도지역;
            row.insertCell(3).textContent = item.위도;
            row.insertCell(4).textContent = item.경도;
            row.insertCell(5).textContent = item.주소;
            row.insertCell(6).textContent = item.주소지역;
        });

        const dataContainer = document.getElementById('dataContainer')
        dataContainer.innerText = dataContainer.innerText + " " + JSON.stringify(data)
        

    } catch (error) {
        console.error("Error parsing JSON from URL:", error);
    }

    
}

 

</script>

</body>
</html>


```
또한 dataContainer 변수를 하나 추가하여, div 태그에 
.innerText 로 해당 데이터가 값이 잘 나오는지 출력 해보았다.



- [x] 240502(목) 오늘 작업한 내용: 
  map.html 에서 flask 서버에 api 요청시 데이터를 가지고 올 순 있었다. 확인해보니 위도, 경도 데이터가 값이 동일한 값이라 flask 서버에 있는 getData 클래스에서거래 허가 처리 정보 openAPI를 응답받아 실 데이터 값으로 다시 임의로 집어넣고 돌려서 웹 페이지 화면단에서 다시 정상적인 위도, 경도 정보 출력을 확인 할 수 있었다. 
  참고자료 차원에서 개선된 소스코드도 여기에 올린다. 

-- address_server.py
```python

from flask import Flask, request, jsonify, render_template, make_response
from geopy.geocoders import Nominatim
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from flask import current_app
import requests
import json
import random  # random 모듈 추가


class testAPI(Resource):
    def get(self):
        # 0. 기본 변수 가져오기
        url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade'
        access_key = '68raIsLdC4XXFhjBlvluVMt+3UTguCEPFuYMoCNKbJPeIMVejtK1JojcJCcz78KXkSh0BIV4DdqqREyNIkM7yA=='
        # access_key2 = '68raIsLdC4XXFhjBlvluVMt%2B3UTguCEPFuYMoCNKbJPeIMVejtK1JojcJCcz78KXkSh0BIV4DdqqREyNIkM7yA%3D%3D'

        # 1. 요청정보 만들기
        url = url
        params = {
           'serviceKey': access_key, 
           'LAWD_CD': '11110', 
           'DEAL_YMD': '202305',
           '_type': 'json'
        }

        # 2. 해당 요청정보로 데이터를 가져온다.
        
        response = requests.get(url, params=params)
        dataOpenAPI =  json.loads(requests.get(url, params=params).text)
        # dataOpenAPI =  json.loads(response.text)
        # return response.text

        print(f'response =====>  {response}')

        data = response.json()
        print(f'data =====>  {data}')

        # 3. 가져온 데이터를 사용해서 결과물을 만든다.
        # resultJson ={'data':[]}
        # for i in range(len(dataOpenAPI['response']['body']['items']['item'])):
        #     resultJson['data'].append({
        #     # '건물면적' : dataOpenAPI['response']['body']['items']['item'][i]['건물면적'],
        #     '주소' : dataOpenAPI['response']['body']['items']['item']['법정동'],
        #     '주소지역' : dataOpenAPI['response']['body']['items']['item'][i]['시군구'],
        #     '용도지역' : dataOpenAPI['response']['body']['items']['item'][i]['용도지역']
        # })

        # 4. 결과물을 고객?에게 전달해준다. (리턴)
        # return resultJson

        resultJson ={'data':[]}
        items = dataOpenAPI.get('response', {}).get('body', {}).get('items', {}).get('item', [])
        
        geolocator = Nominatim(user_agent='chiricuto')
        for item in items:
            location = geolocator.geocode(item.get('법정동'))

            # print(f'AAAAAAA:',addr)  
            # latitude = location.latitude
            # longitude = location.longitude 
            # print(f'위도:',latitude)  
            # print(f'경도:',longitude)  
        
            # try:
            resultJson['data'].append({
                '건물면적': item.get('건물면적'),
                '주소': item.get('법정동'),
                '주소지역': item.get('시군구'),
                '용도지역': item.get('용도지역'),
                '위도':location.latitude,
                '경도':location.longitude
            })
            # except KeyError as e:
                # continue  # 또는 로그 찍기 등의 예외 처리
        # 결과를 JSON 문자열로 변환하여 반환
        # return json.dumps(resultJson, ensure_ascii=False)
        return jsonify(resultJson)
        


# class GeocordResource(Resource):
#     def get(self):
#         return searchAddress(request.args.get('address'))

# def searchAddress(address):
#     apikey = "652EC099-CCB3-350E-AE95-1C0262EBC36B"
#     apiurl = "https://api.vworld.kr/req/search?"
#     params = {
#         "service": "search",
#         "request": "search",
#         "crs": "EPSG:4326",
#         "query": address,
#         "type": "address",
#         "category": "road",
#         "format": "json",
#         "key": apikey,
#     }
    
#     response = requests.get(apiurl, params=params)
#     print(response)

#     data = response.json()
#     print(data)


#     result = {'data':[]}
#     if data.get('response') and data['response'].get('result') and data['response']['result'].get('items'):
#         for x in data['response']['result']['items']:
#             result['data'].append({
#                 '주소': x['address']['road'],
#                 '위도': x['point']['y'],
#                 '경도': x['point']['x']
#             })
#     else:
#         result['error'] = 'No results found'

#     return result

class BudongInfo(Resource):
           
    def get(self):
        
        item = ["청운동", "통의동", "체부동", "당주동", "신문로1가", "청진동", "수송동", "삼청동", "계동", "돈의동"]
        result = {'info': item}  # 모든 이름을 'info' 키에 리스트로 저장
        return result

        # temp =  ["상철", "영희", "철수", "미자", "준호", "수진", "태영", "지원", "민수", "서연"]
        # result ={'info':[]}
        # for i in temp:

            # 랜덤하게 이름 선택
            # budong_info = random.choice(i)
            # Api(app).add_resource(BudongInfo,'/budong_info')
            #  top_product = i
        # return {"name": top_product}
        #    info = {"name": i}
        # return info

class getData(Resource):
    def get(self):
        data =  [
                    
            {"번호":1, "건물면적": 52.89,   "용도지역": "제3종일반주거",  "위도": 37.58446,      "경도": 126.99869,        "주소": " 명륜2가","주소지역": "종로구"},
            {"번호":2, "건물면적": 267.31,  "용도지역": "준주거",       "위도": 37.57595,      "경도": 127.01313,        "주소": " 창신동","주소지역": "종로구"},
            {"번호":3, "건물면적": 40.45,   "용도지역": "일반상업",       "위도": 37.57595,     "경도": 127.01313,        "주소": " 창신동","주소지역": "종로구"},
            {"번호":4, "건물면적": 452.3,   "용도지역": "제2종일반주거",   "위도": 37.57595,     "경도": 127.01313,         "주소": " 창신동","주소지역": "종로구"},
            {"번호":5, "건물면적": 201.65,  "용도지역": "일반상업",      "위도": 37.57595,      "경도": 127.01313,         "주소": " 창신동","주소지역": "종로구"},
            {"번호":6, "건물면적": 67.8,    "용도지역": "일반상업",        "위도": 37.57595,    "경도": 127.01313,         "주소": " 창신동","주소지역": "종로구"},
            {"번호":7, "건물면적": 29.22,   "용도지역": "제2종일반주거",  "위도": 37.609029,     "경도": 126.9573925,       "주소": " 구기동","주소지역": "종로구"},
            {"번호":8, "건물면적": 38.93,   "용도지역": "제3종일반주거", "위도": 37.5768977,     "경도": 126.958787012829,  "주소": "무악동","주소지역":"종로구"}
        ]
        return data

class Detail(Resource):
    def get(self):
        # return {"data": data}, 200
        html = render_template('detail.html')
        
        # make_response를 사용하여 응답 객체 생성
        response = make_response(html)

        response.headers['Content-Type'] = 'text/html'
        
        return response


def route_app(app):
   
    # 경로없이 들어오면 정적 파일 보여주기
    Api(app).add_resource(testAPI,'/')
    # api.add_resource(GeocordResource, '/getGeocord')
    Api(app).add_resource(BudongInfo,'/budong_info')
    Api(app).add_resource(getData,'/getData')
    Api(app).add_resource(Detail,'/detail')
    
    
def create_app():
    # Flask 객체 초기화
    app = Flask(__name__, template_folder='templates')

    # 정적 파일 디렉토리 설정
    app.static_folder = 'public'
    
    # URL 경로의 prefix 제거
    app.static_url_path = ''

    # CORS 적용
    CORS(app)  

    return app


app = create_app()
route_app(app)


# app.run : Flask 서버 구동, 기본 포트 5000번
if __name__ == "__main__":
    # serverConfig = {
    #     'host': 'localhost',
    #     'port': 4000, 
    #     'debug': True
    # }

    port = 5000
    print( f"서버 실행 |  http://localhost:{port}")
    app.run(host= '0.0.0.0',
        port= port, 
        debug= True)


```

 - [x] 240502(목) 오늘 작업한 내용: 
  이번엔 화면에서 선택박스를 클릭하여 JSON 데이터로 응답 받은
  부동산 허가면적, 용도지역, 위도, 경도, 주소, 주소지역에 관련한 정보를 원하는 데이터만 택하여 정보를 출력 할수 있게 끔 기능을 추가했다. 지난번 원빈씨가 알려준 콜백함수, promise 객체, then 함수등, 해당 개념과 제어순서에 관해 파악을 하였고, 또한 서버에 요청하는 함수들 중에서 Fetch(), AJAX(jQuery), Axi(React) 이 함수들의 수행기능등 비동기 방식으로 요청 정보를 수행할 수 있는 통신방식에 대하여 분석하였고, fetch()함수와 awit를 함께 사용하여 비동기 방식으로 Json 정보를 불러와  이벤르리스너 호출 실행시 콜백함수?로 콜하여 익명함수에 async를 정의해 fetch() 에서 받은 서버요청 주소를 response로 받아 response.json()을 호출하여 해당정보를 이상없이 출력하였다. 그리고 이에 따른  소스 코드를 개선 하였다. 변경된 해당 소스 코드도 함께 업데이트하여 올린다. 

  ---detail.html ---
  ```html 

  <!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>Data Receiver</title>
</head>
<body>

<!--<input type="button" onclick="getAndDisplayData()" value="여기에 데이터 출력" >-->
<div id="dataContainer">여기에 div 컨데이너1 정보가 들어옵니다. </div>
<!--<div id="dataContainer1">여기에 div 컨데이너2 = {{ dict1 }}</div>-->
<h1>부동산 거래 허가 정보</h1>
<input type="button" onclick="getAndDisplayData()" value="여기에 데이터 출력">
<table id="dataTable" border="1">
<thead>
<tr>
    <th>번호</th>
    <th>건물면적</th>
    <th>용도지역</th>
    <th>위도</th>
    <th>경도</th>
    <th>주소</th>
    <th>주소지역</th>
</tr>
</thead>
<tbody>
<!-- 데이터 행은 여기에 동적으로 추가됩니다 -->

</tbody>
</table>

<script type="text/javascript">
// 비동기 프로그래밍 키워드 : (async, await)
// 서버에 요청하는 함수(모듈) : Fetch(JS) , AJAX(jquery) , Axios(React) | 전처리 편하게 해주는 정도의 차이. 기타 세부기능의 차이
// => 본질 : 다른 서버에 뭔가를 요청하고. 응답을 받아오는 함수. (서버가 계산해서 던져주면 받음.)
// 키워드 : 콜백함수, promise 객체, then 함수

// function 더하기(x,y){
//     return x+y
// }
//
// function abc(a,b,c){
//    return c(a,b);
// }
//
// const test = abc(1,2,더하기)
//

async function getAndDisplayData() {
try {
    // 쿼리 스트링의 'data' 값을 JSON 객체로 파싱합니다.
    const response = await fetch('http://localhost:5000/getData');
    const data = await response.json();


    // 기존 행을 삭제
    const tableBody = document
        .getElementById('dataTable')
        .getElementsByTagName('tbody')[0];

        // JSON 데이터를 테이블 행으로 변환
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.번호;
        row.insertCell(1).textContent = item.건물면적;
        row.insertCell(2).textContent = item.용도지역;
        row.insertCell(3).textContent = item.위도;
        row.insertCell(4).textContent = item.경도;
        row.insertCell(5).textContent = item.주소;
        row.insertCell(6).textContent = item.주소지역;
    });

    const dataContainer = document.getElementById('dataContainer')
    dataContainer.innerText = dataContainer.innerText + " " + JSON.stringify(data)


    } catch (error) {
        console.error("Error parsing JSON from URL:", error);
    }
}


document.addEventListener('DOMContentLoaded', async function() {

try {
    const response = await fetch('http://localhost:5000/getData');
    const jsonData = await response.json();
    console.log('jsonData Array ==>', jsonData );

    document.getElementById('filterButton').addEventListener('click', function() {
    let selectedColumns = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(chk => {
        selectedColumns.push(chk.value);
    });

    const filteredData = jsonData.map(item => {
        let filteredItem = {};
        selectedColumns.forEach(key => {
            if (item.hasOwnProperty(key)) {
                filteredItem[key] = item[key];
            }
    });
        return filteredItem;
    });

document.getElementById('output').textContent = JSON.stringify(filteredData, null, 2);

    });
        } catch (error) {
    console.error("Error parsing JSON from URL:", error);
    }
});
</script>

<h1> 부동산 건물면적, 용도별 처리정보를 체크박스로 선택하여 원하는 정보를 출력(JSON타입)</h1>
<div>
<label><input type="checkbox" value="건물면적"> 건물면적</label>
<label><input type="checkbox" value="용도지역"> 용도지역</label>
<label><input type="checkbox" value="주소"> 법정동</label>
<label><input type="checkbox" value="주소지역"> 주소지역</label>
</div>
<button id="filterButton">선택 정보 조회</button>
<pre id="output"></pre>
</body>
</html>


  ```

  
  - [x] 240502(목) 오늘 작업한 내용: 
  detail.html 화면에서 서버에서 정보를 가져와 테이블에서 출력시
  화면에서 보여지는 테이블 스타일 너무 각지고 단조로워 보여기에
  테이블태그와 버튼태그를 CSS속성을 정의하여 시각적으로 보다 깔끔하고 세련되고 밝은 이미지를 표현하기위해 적용한 테이블 스타일, 버튼 스타일로 만들어 index.css 파일로 속성들을 정의하여
  head 섹션에 <link  href="저장된 파일경로"> 태그를 사용해 css 파일로 옯겨 놓았다. 결과는 나름 괜찬은 편안한 그린계열 색생의 테이블로 스타일이 적용되어 나름 만족스럽다고 판단되었다. 
  아래는 CSS 스타일 속성이 적용된 index.css 소스코드이다. 

 ---detail.html---
 ```html
<link rel="stylesheet" type="text/css" 
  href="../public/index.css">
 ```

---index.css
 ```css
/* 테이블 기본 스타일 */
#dataTable {
    width: 100%; /* 테이블의 너비를 페이지 전체로 설정 */
    border-collapse: collapse; /* 테이블의 테두리를 겹쳐서 보이게 함 */
    font-family: Arial, sans-serif; /* 글꼴 스타일 지정 */
    background-color: #f8f8f8; /* 테이블 배경색 */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* 테이블에 그림자 효과 추가 */
    margin: 20px 0; /* 상하 마진 지정 */
}

/* 테이블 헤더 스타일 */
#dataTable thead {
    background-color: #4CAF50; /* 헤더의 배경색 */
    color: white; /* 헤더 글자 색상 */
}

#dataTable thead th {
    padding: 15px; /* 헤더 셀의 내부 여백 */
    text-align: left; /* 텍스트 왼쪽 정렬 */
}

/* 테이블 바디 스타일 */
#dataTable tbody td {
    padding: 12px; /* 바디 셀의 내부 여백 */
    border-bottom: 1px solid #ddd; /* 셀 아래에 경계선 추가 */
}

/* 마우스 오버 시 행 스타일 변경 */
#dataTable tbody tr:hover {
    background-color: #e9e9e9; /* 마우스 오버 시 행의 배경색 변경 */
}

/* 첫 번째 열 스타일 */
#dataTable tbody tr td:first-child {
    font-weight: bold; /* 첫 번째 열의 텍스트를 굵게 표시 */
}


input[type="button"] {
    padding: 10px 20px; /* 버튼 내부의 여백 설정 */
    font-size: 16px; /* 글자 크기 */
    font-family: Arial, sans-serif; /* 글꼴 설정 */
    color: white; /* 글자 색상 */
    background-color: #4CAF50; /* 배경 색상 */
    border: none; /* 테두리 없애기 */
    border-radius: 5px; /* 테두리 모서리 둥글게 */
    cursor: pointer; /* 마우스 커서 모양을 손가락 모양으로 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
    transition: all 0.3s ease; /* 부드러운 전환 효과 */
}

input[type="button"]:hover {
    background-color: #45a049; /* 마우스를 올렸을 때 배경 색상 변경 */
}

input[type="button"]:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 클릭 시 그림자 효과 변경 */
    transform: translateY(2px); /* 클릭 시 약간 아래로 이동 */
}

/* 모든 버튼에 적용되는 기본 스타일 */
input[type="button"], button {
    padding: 10px 20px; /* 버튼 내부의 여백 설정 */
    font-size: 16px; /* 글자 크기 */
    font-family: Arial, sans-serif; /* 글꼴 설정 */
    color: white; /* 글자 색상 */
    border: none; /* 테두리 없애기 */
    border-radius: 5px; /* 테두리 모서리 둥글게 */
    cursor: pointer; /* 마우스 커서 모양을 손가락 모양으로 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
    transition: all 0.3s ease; /* 부드러운 전환 효과 */
}

/* 호버 효과 */
input[type="button"]:hover, button:hover {
    background-color: #45a049; /* 마우스를 올렸을 때 배경 색상 변경 */
}

/* 액티브 상태 효과 */
input[type="button"]:active, button:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 클릭 시 그림자 효과 변경 */
    transform: translateY(2px); /* 클릭 시 약간 아래로 이동 */
}

/* filterButton ID에 대한 특정 스타일 */
#filterButton {
    background-color: #007BFF; /* 버튼의 배경색을 블루로 설정 */
}

/* filterButton의 호버 효과를 조정 */
#filterButton:hover {
    background-color: #0056b3; /* 마우스를 올렸을 때 더 진한 블루로 변경 */
}

 ```

- [x] 240502(목) 오늘 작업한 내용: 
 1. git 강의
2. python 강의
3. 제 골격에 코드추가
4. 만든 코드를 구조 개선하기
   등을 학습한다.
   현재 주소 검색을 포함한 데이터 해당 정보를 출력하는 허가정보를 출력하는 서비스를 추가하였고, 관련 소스를 업데이트 및 리팩토링, 리뉴얼등의 작업을 거쳐 파일구조를 변경할
   예정이다.



- [x] 240502(금) 오늘 작업한 내용: 
 원빈씨가 요청 코드구조를 원본 파일구조에서 리팩토링 작업을 진행, check box html 태그를 이용하여
 값을 const jsonData = response.json() 함수로 json 문자열 데이터를 받고, 각각 아래와 같이 체크박스 태그에 담아 채크한 정보만 출력하게 하였다. 아래는 관련 html 소스이다.  
```html
<h1> 건물면적, 용도별 허가정보들을 선택후 조회</h1>
<div>
<label><input type="checkbox" value="건물면적">건물면적</label>
<label><input type="checkbox" value="용도지역">용도지역</label>
<label><input type="checkbox" value="주소">법정동</label>
<label><input type="checkbox" value="주소지역"> 주소지역</label>
</div>

<input type="button" id="filterButton" onclick="getDataAndCheckbox()" value="선택 정보 조회">

<div id="dataContainer3">여기에 JSON type으로 정보 들어옴. </div> 
<pre id="output"></pre>
<button onclick="loadData()">선택 데이터 조회</button>
<table id="dataTable3" border="1">
    <thead>
    <tr>
        <th>건물면적</th>
        <th>용도지역</th>
        <th>법정동</th>
        <th>주소지역</th>
    </tr>
    </thead>
    <tbody>
    <!-- 데이터 행은 여기에 동적으로 추가됩니다 -->
    
    </tbody>
    </table>
</div>
```
해당 자바스크립트 소스는 다음과 같다. 
```javascript
async function loadData() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    // const selectedColumns = Array.from(checkboxes).map(checkbox => checkbox.value);
    
    const response = await fetch('/getData2');
    const jsonData = await response.json();

    const tbody = document.getElementById('dataTable3').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // 기존 데이터를 클리어합니다.

    let selectedColumns = [];

    checkboxes.forEach(chk => {
        selectedColumns.push(chk.value);
    });

    jsonData.forEach(data => {
        const row = tbody.insertRow();
        selectedColumns.forEach(column => {
            const cell = row.insertCell();
            cell.textContent = data[column];
        });
    });

  
}    

```
이상입니다. 그리고 또한 주소검색, 부동산 거래 허가 정보를 조회 할수 있는 원본 서비스에서 내가 작업한 
소스코드를 피펙토링하여 추가 하였고, 현재 수정중에 있으며, 새 주소로 위도 경도 검색이 현재 거래 매매 정보,
년도별 허가 거래 정보 에서 둘다 데이터 조회가 가능하다. 이후 OpenAPI를 추가로 보완하여 작업을 지속할 예정입니다. 

- [x] 240502(금) 오늘 작업한 내용: 
  OpenAPI를 request 요청으로 받아와 json으로 데이터를 변환하여 url 요청시 해당데이터를 응답받는것을
  호가인 했는데, 원본api 데이터에는 "번호": 1 키 즉 넘버링이 존재하지 않아, 반복문을 돌리기 전에 i = 1 번홀르 초기화 하여 반복문안에 번호를 i 번째로 받아와 반복문이 실행이 되면 루프를 빠져나와 i += 1 즉 1식 증가 시켜 각 데이터 행에 번호를 추가하여 번호 필드값이 순서대로 나올수 있도록 처리했다. 

- [x] 240502(금) 오늘 작업한 내용: 
  OpenAPI 의 인증키 값을 소스코드내에서 보안상 노출 되지 않도록 .env 에 인증키를 저장하여, os.getenv(변수명)으로 불러와 소스에 적용하였다. 

- [x] 240502(금) 오늘 작업한 내용:  
  스케줄러를 통해 데이터를 시간대 별로 받아와 OpenAPI 정보를 json으로 받아와 적용하려고 하는데, get함수를 필요한 클래스에 접근을 하는 방법을 몰라 실패하였다. 담주 교육시간에 알아볼 예정이다. 
  담주 작업시간에 원빈씨에게 문의 해봐야겠다..
  



   





   
