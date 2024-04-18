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

## 신청목록 : 
#### 국토교통부_상업업무용 부동산 매매 신고 자료
https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057267#tab_layer_recommend_data

####  국토교통부_아파트매매 실거래 상세 자료
https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057511

#### 국토교통부_단독/다가구 매매 실거래 자료
https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15058022

#### 국토교통부_아파트매매 실거래자료
https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057511

### 국토교통부_아파트 전월세 자료
https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15058017

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
        access_key = '3eOGOAEPOiPqau/C6kf/oHmEnfPCHl13BZoim0o1ruznUU/CNzVrcIBXINoMdMz05a2lcyoAG0EuBsjlaLRHSA=='

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

   
