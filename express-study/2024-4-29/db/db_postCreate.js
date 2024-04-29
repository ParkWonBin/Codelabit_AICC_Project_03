const oracledb = require('oracledb');

// 데이터베이스 연결 및 쿼리 실행 함수
async function executeQuery(sql, bind) {
    let conn;

    conn = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe'
    });

    await conn.execute(sql, bind);
    await conn.commit();

}

module.exports = {
    executeQuery
};
