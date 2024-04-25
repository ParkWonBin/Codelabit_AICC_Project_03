const express = require('express');
const bodyParser = require('body-parser');  // body-parser 모듈 추가
const cors = require('cors')
const app = express();
const port = 4000;

// body-parser 미들웨어 적용
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.post('/login', (req, res) => {
    // req.body에는 요청의 바디 데이터가 들어있습니다.
    console.log('Received data:', req.body);

    let isLoginSucced = false;
    if( req.body.username == '영희' && req.body.password == '0904'){
        isLoginSucced = true
    }


    const result = {
        success: isLoginSucced,
        message: isLoginSucced? '로그인 성공': '로그인 실패',
        body : req.body
    }

    // 예시로 응답을 보내는 경우
    res.json(result);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
