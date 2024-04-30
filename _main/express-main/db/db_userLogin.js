const oracledb = require('oracledb');
const dbconfig =require("../dbconfig")

// 로그인 체크
const db_userLogin = async(username, password)=>{
    // db연결
    const conn = await oracledb.getConnection(dbconfig);

    // 명령 생성 및 실행
    const sql = 'select username, password from users where username = :username and password = :password'
    const bind = {username, password}
    const result = await conn.execute(sql,bind)
    
    // db 연결 종료
    conn.close();

    // 결과 반환
    return {
        isSucceed: result.rows.length > 0
    };
}

// 함수 내보내기
module.exports = db_userLogin