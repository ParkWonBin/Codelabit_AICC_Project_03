const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

oracledb.initOracleClient({libDir: 'C:\\JHLee\\Util\\instantclient_21_13'})

// 오라클 DB 연결 정보
const dbConfig = {
    user: 'username',
    password: '0904',
    connectString: 'localhost:1521/xe'
};

// 정적 파일 제공
// app.use(express.static('public'));

// 홈 페이지 렌더링
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 데이터 삽입 핸들러
app.post('/insert', async (req, res) => {
    try {
        // POST 요청으로부터 이름과 나이를 가져옴
        const {name, latitude, longitude} = req.body;

        // Oracle DB 연결
        const connection = await oracledb.getConnection(dbConfig);

        const sql = 'INSERT INTO coffeemap (name, latitude, longitude) VALUES (:name, :latitude, :longitude)'
        const bind = {
            name : name,
            latitude : latitude,
            longitude : longitude
        }

        // 데이터베이스에 데이터 삽입
        await connection.execute(sql,bind);
        await connection.commit(); // 커밋 실행

        // 연결 종료
        await connection.close();

        res.send('데이터가 성공적으로 삽입되었습니다.');
    } catch (err) {
        console.error(err);
        res.status(500).send('오류가 발생했습니다.');
    }
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
