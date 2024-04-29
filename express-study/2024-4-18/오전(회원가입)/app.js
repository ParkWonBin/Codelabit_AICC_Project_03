const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'});

const app = express();
const port = 3000;

// Oracle DB 연결 설정
const dbConfig = {
    user: 'username',
    password: '0904',
    connectString: 'localhost:1521/xe'
};

// 웹 어플리케이션 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HTML 폼 페이지
app.get('/', (req, res) => {
    res.send(`
    <form action="/insert" method="post">
      <label for="data">id:</label><br>
      <input type="text" id="data" name="id"><br>
      <label for="data">name:</label><br>
      <input type="text" id="data" name="name"><br>
      <label for="data">password:</label><br>
      <input type="password" id="data" name="password"><br>
      <label for="data">password 확인:</label><br>
      <input type="password" id="data" name="confirm_password"><br>
      <button type="submit">회원가입</button>
    </form>
  `);
});

// 데이터베이스에 데이터 삽입
app.post('/insert', async (req, res) => {
    try {
        const { id, name, password, confirm_password } = req.body;

        if (password !== confirm_password) {
            return res.status(400).send('비밀번호가 일치하지 않습니다.');
        }

        const connection = await oracledb.getConnection(dbConfig);

        const sql = 'INSERT INTO users (userid, username, password) VALUES (:id, :name, :password)'
        const bind = {
            id : id,
            name : name,
            password : password
        }

        await connection.execute(sql, bind);
        await connection.commit();
        await connection.close();
        res.send('데이터가 성공적으로 삽입되었습니다.');
    } catch (err) {
        console.error(err);
        res.status(500).send('데이터 삽입 중 오류가 발생했습니다.');
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
