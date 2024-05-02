### 종속성 다운로드
```bash
# Flask 관련 패키지 설치
pip install Flask Flask-Cors flask_restful 

# dotenv 등 보안관련 패키지 설치
pip install python-dotenv 

# geopy 패키지 설치(새주소->위경도 변환)
pip install geopy
```

### 파일분리 관련
render_template으로 public 폴더의 파일 참조시 이렇게 설정
```html
<script src="{{ url_for('static', filename='js/getAndDisplayData.js') }}"></script>
```
render_template안에서 data Binding 할 때는
함수에 **args로 데이터 key,value 전달해주고, html 안에서 {{ 변수명(key값) }}  호출하면 된다.


### post 로 데이터 실어보내는 예시
```js
// 요청에 넣을 data 가져오기
const query = document.getElementById('geoquery').value;

// 결과 표시할 UI 잡기
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = '검색중...';

// 데이터를 전송할 때는 이렇게 body 에 실어보낸다.
const response = await fetch('/getGeoData', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: query })
});

// 응답을 받아서 json으로 파싱한다.
const data = await response.json();

// 결과를 화면에 그린다.
resultDiv.innerHTML = '';
```

### post 로 데이터 받아오는 예시
```py
from flask_restful import Resource, request
from geopy.geocoders import Nominatim

class getGeoData(Resource):
    def __init__(self):
        # 인코더는 한번만 만들기
        self.geolocator = Nominatim(user_agent='chiricuto')

    def post(self):
        # 데이터 가져오기 : flask_restful > request 여기에 요청 정보 있음
        reqQuery = request.json.get('query')

        # 검색 시도
        getData = self.geolocator.geocode(reqQuery)

        # 응답 만들기
        result = {'isFound': False, 'address': '', 'latitude': '', 'longitude': '', 'boundingbox': []}
        if getData:
            result['isFound'] = True
            result['address'] = getData.address
            result['latitude'] = getData.latitude
            result['longitude'] = getData.longitude
            result['boundingbox'] = getData.raw['boundingbox']
        return result
```