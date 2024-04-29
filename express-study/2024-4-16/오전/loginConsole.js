// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'})

async function run() {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: 'username',
            password: '0904',
            connectString: 'localhost:1521/xe' // 이 부분을 실제 Oracle DB의 호스트, 포트 및 서비스 이름으로 변경하세요.
        });

        // 연결이 성공적으로 설정되었음을 확인합니다.
        console.log('Successfully connected to Oracle Database');

        // 여기에 SQL 쿼리를 실행하는 코드를 추가하세요.
        // 예시: 데이터 조회
        const result = await connection.execute('SELECT * FROM users');
        console.log(result.rows); // 쿼리 결과 출력

    } catch (err) {
        console.error('Error occurred:', err);
    } finally {
        if (connection) {
            try {
                // 연결 종료
                await connection.close();
                console.log('Connection closed');
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
}

run();