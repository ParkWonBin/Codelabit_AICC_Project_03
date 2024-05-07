const oracledb = require('oracledb');
const dbconfig =require("../dbconfig")

// 로그인 체크
const db_userLogin = async(userId, userPw)=>{
    // db연결
    const conn = await oracledb.getConnection(dbconfig);

    // 명령 생성 및 실행
    const sql = `
    select u_id, u_name, idx from users 
    where u_id = :userId and u_pw = :userPw`
    
    const bind = {userId, userPw}
    const result = await conn.execute(sql,bind)
    
    // db 연결 종료
    conn.close();
    
    // 결과 반환
    if (result.rows.length>0){
        return {
            isSucceed: true,
            id:result.rows[0][0],
            name:result.rows[0][1],
            idx:result.rows[0][2]
        }
    }else{
        return {
            isSucceed: false,
            name:''
        };
    }
}

// 함수 내보내기
module.exports = db_userLogin