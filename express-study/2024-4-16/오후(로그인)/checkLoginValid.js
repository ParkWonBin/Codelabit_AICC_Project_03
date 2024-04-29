// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'})

async function checkLoginValid(username, password) {

    const connection = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe' // 이 부분을 실제 Oracle DB의 호스트, 포트 및 서비스 이름으로 변경하세요.
    });

    const sqlString = 'SELECT username, password FROM users WHERE username = :username AND password = :password';
    const bindData = {'username': username, 'password': password}
    const result = await connection.execute(sqlString, bindData);


    await connection.close();

    console.log(result)
    if (result.rows.length > 0) {
        return '성공'
    } else {
        return '실패'

    }
}

// (async () => {
//     const test = await chekLoingVaild('영희', '0904');
//     console.log(test);
// })();

module.exports = checkLoginValid;