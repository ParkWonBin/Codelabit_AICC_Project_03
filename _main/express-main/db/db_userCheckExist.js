const oracledb = require('oracledb');
const dbconfig =require("../dbconfig")

// id 중복여부 체크
const db_userCheckExist = async(userid)=>{
    // db연결
    const conn = await oracledb.getConnection(dbconfig);

    // 명령 생성 및 실행
    const sql = `SELECT COUNT(*) FROM users WHERE userid = :userid`
    const bind = {userid}
    const result = await conn.execute(sql,bind)
    
    // db 연결 종료
    conn.close();

    // 결과 반환
    return {
        isExist: result.rows[0][0] > 0
    };
}

// 함수 내보내기
module.exports = db_userCheckExist