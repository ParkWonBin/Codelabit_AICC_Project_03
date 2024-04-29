const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const oracledb = require('oracledb');
oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'});
// const checkLoginValid = require('./checkLoginValid');



// 로그인 페이지 렌더링
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getPlace' , async (req,res)=>{
    // const result = {
    //     'data1':'test123',
    //     'data2':'test12312314'
    // }
    // res.json(result)

    let connection = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe' // 이 부분을 실제 Oracle DB의 호스트, 포트 및 서비스 이름으로 변경하세요.
    });

    const result = await connection.execute('SELECT * FROM coffeemap');

    var resultJson = {data:[]}
    for (var i = 0; i < result.rows.length; i++) {
        const data = {
            'name':result.rows[i][0],
            'latitude':result.rows[i][1],
            'longitude':result.rows[i][2]
        };
        resultJson.data.push(data);
    }

    // var resultJson = {'data':
    //         result.rows.map(row => ({
    //             'name': row[0],
    //             '위도': row[1],
    //             '경도': row[2]
    //         }))
    // };

    res.json(resultJson);

})

// 로그인 처리
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//
//     const isSucceed = await checkLoginValid(username, password)
//     // 여기서는 간단하게 하드코딩된 계정 정보를 사용하겠습니다.
//     if (isSucceed === '성공') {
//         res.send('로그인 성공!');
//     } else {
//         res.send('잘못된 사용자 이름 또는 비밀번호');
//     }
// });
//
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});