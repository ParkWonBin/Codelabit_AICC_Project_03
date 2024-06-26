# express

### Express CORS 설정
```js
const cors = require('cors'); 
const path = require('path');
const express = require('express');

const app = express();
app.use(cors()); // react-express 요청 주고 받을 수 있도록 처리
app.use(express.json());  // req.body로 json 읽도록
app.use(express.urlencoded({ extended: true })); // req.body 로 form 읽도록
```

### 행추가하고 바로 idx 받아올 떄
outBind 라는 게 있다.
```js
const sql = `
INSERT INTO users (idx, u_id, u_name, u_pw)
VALUES (user_seq.NEXTVAL, :userId, :userName, :userPw)
RETURNING idx INTO :idx
`;
const bind = {userId, userName, userPw,
    idx: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
};
const result = await connection.execute(sql, bind, { autoCommit: true });
const newUserIdx = result.outBinds.idx[0]; 
```


## API key 숨기기
### dotenv
#### 환경변수 설정
프로젝트 루트 위치에 .env 파일 생성
```js
require('dotenv').config()
```
#### 환경변수 사용
```js
console.log(process.env.ORACLE_CLIENT)
```


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
