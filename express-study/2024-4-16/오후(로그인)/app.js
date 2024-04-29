const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// const oracledb = require('oracledb');
// oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'})
const checkLoginValid = require('./checkLoginValid');


// 로그인 페이지 렌더링
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// 로그인 처리
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)
    console.log(req)

    const isSucceed = await checkLoginValid(username, password)
    // 여기서는 간단하게 하드코딩된 계정 정보를 사용하겠습니다.
    if (isSucceed === '성공') {
        res.json({success:true});
    } else {
        res.json({success:false});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});