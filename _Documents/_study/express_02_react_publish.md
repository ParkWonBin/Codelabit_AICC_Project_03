## 리엑트 연동(합치기)
그냥 프로젝트 겹쳐서 관리하면 됨

#### 폴더구조
express프로젝트
- node_modules
- react-project
  - build
  - node_modules
  - public
  - src
- server.js
- package.json

##### server.js 파일
```js
const express = require('express');
const cors = require('cors'); 
const path = require('path');
const app = express();

// react-express 요청 주고 받을 수 있도록 처리
app.use(cors()); // 차단하지 않도록
app.use(express.json());  // req.body로 json 읽도록

// 서버 실행
app.listen(8080, function () {
  console.log('listening on 8080')
});

// 리소스 가져올 수 있도록
app.use(express.static(path.join(__dirname, 'react-project/build')))

// 파일 가져오기
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'react-project/build/index.html'))
})
```

리엑트 라우터랑 같이 쓸 경우,   
리엑트 라우터가 아니라 express 라우터로 요청이 들어간다.   
그래서 다음과 같이 하위 경로를 모두 리엑트로 들어가게 해줘야 react 라우터가 작동한다.
```js
app.get('*', function (req, res) {
  req.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});
```

html을 서버가 만들면 server-side rendering  
html을 리엑트(JS)가 만들면 client-side render   
라고 한다.

개발중에 계속 build 해서 쓰기 보다는,
그냥 프로젝트 환경 2개 띄워놓고, 리액트 따로, express 따로 개발하도록 하면 편한다.


#### express 랑 react랑 요청 주고받으려면
```js
app.use(express.json()); // 바디파서로 json 인식하게 하도록
const cors = require('cors'); // 차단하지 않도록
app.use(cors());
```
이거 넣어줘야 한다.