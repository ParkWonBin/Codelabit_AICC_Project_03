const oracledb = require('oracledb');

// Oracle 클라이언트 초기화 함수


// 데이터베이스 연결 및 쿼리 실행 함수
async function executeQuery(sql, bind) {
    let conn;

    conn = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe' // 실제 Oracle DB의 호스트, 포트 및 서비스 이름으로 변경
    });

    await conn.execute(sql, bind);
    await conn.commit();
}

module.exports = {
    executeQuery
};
