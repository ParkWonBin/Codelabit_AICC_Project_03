# react 

## react 문법적인 이슈
- [x] 컴퍼넌트 첫글자 소문자로 넣으면 인식 못함
- [x] 스크립트 테그 추가 필요시 index.html에 직접 추가하도록
- [x] 로그인창 들어가자마자 회원가입 페이지로 바로가지는 문제 (회원가입 버튼 onClick 속성에 setState 수정하는 포인터 대신 그냥 호출해버려서 랜더링과 동시에 실행됨.)


## router로 페이지 이동
- 이동할 때는 <Link> 테그 쓰기
- 함수로 이동할 때는 useNavigate 쓰기
- useNavigate,useLocation 로 이동할 떄 변수도 넘길 수 있다.

### 이동 및 변수 예시
```js
// 출발 시 변수 넣기
import { useNavigate } from 'react-router-dom';
function Component() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        // state 객체에서 데이터 전달
        navigate('/next-page', { 
            state: { userId: 1, userInfo: 'User Details' } 
        });
    };
    return (<button onClick={handleNavigation}>Go</button>);
}
```
```js
import { useLocation } from 'react-router-dom';
// 도착 시 변수 받기
function NextPage() {
    const location = useLocation();
    const { userId, userInfo } = location.state; 
    // state 객체에서 데이터 추출
    return (<div>
    <h1>User ID: {userId}</h1>
    <p>User Info: {userInfo}</p>
</div>);
}

```

## API key 숨기기
### kakao API
#### dotenv
##### 환경변수 설정
react 프로젝트 루트 경로에 .env 파일 생성
```ini
# create-react-app을 사용하면 dotenv가 내장되어 있다.
# react에서 환경변수 불러오려면, 환경변수명이 "REACT_APP_"로 시작해야한다.
REACT_APP_API_KEY_KAKAO_JS=
```

##### 환경변수 사용
```js
const kakaoClientId = process.env.REACT_APP_API_KEY_KAKAO_JS
```

#### Kakao Map
상황 : index.html 에서 script 테그로 kakaoMap 스크립트를 읽어와야 한다.  
이슈 : kako cdn에서 스크립트를 요청할 때, srcipt 내 api키가 노출된다.

우회법 : 
1. express 서버를 통해 script 요청. api키는 서버 내에서 사용.
2. react public 폴더 안에 script 파일로 저장. 파일 참조.

의사결정 : 
kakao와 express 서버에 요청을 너무 자주 보내게 될 것 같아서,  
스크립트를 public폴더에 저장해놓고 사용하는 방식을 채택했다.

#### Kakao Login
react내 환경변수를 사용하여 kakao API key를 저장.  
- [ ] 배포 한 이후에도 환경변수 제대로 보호되는지 확인 필요.
- [ ] 반환받은 엑세스 코드, 세션값 등 어떻게 관리하는지 공부 필요.

---


---

## react-express 연동
1. [REACT] Public URL 설정하기 :
   - package.json 파일에 homepage 필드를 추가.
    ```json
    {
        // react가 build 됐을 때 해당 하위 경로로 리소스를 요청함.
        "homepage": "/react",
    }
    ```
2. [REACT] BrowserRouter 에 basename 속성을 추가.
   - index.js 나 App.js에서 BrowserRouter 에 속성 추가 
   ```js
    // basename 설정을 해두면, Link, Route 에서 경로 잡아줌
    return <Router basename="/react">...</Router>
   ```
3. [REACT] 페이지 이동을 할 때는 Link 컴퍼넌트 사용
    ```js
    import { Link } from 'react-router-dom';
    return <Link to="/about">About</Link>
    ```
4. [EXPRESS] 라우팅 설정
```js
// express 프로젝트 루트폴터에 react build 폴더 복사해서 넣기
// 1. react 하위 경로로 오는 모든 요청은 '/react'로 이동시켜줌
app.get('/react/*',(req,res)=>res.redirect('/react'))
// 2. react에서 homepage 설정을 해놨기 때문에 해당 하위경로로 리소스 요청함.
app.use('/react',express.static(path.join(__dirname, '/build')))
```
