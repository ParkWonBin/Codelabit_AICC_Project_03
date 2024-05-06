const oracledb = require('oracledb');
const dbconfig =require("../dbconfig")

// db연결하여 회원가입하는 함수 정의
const db_userDelete = async(userId)=>{
    let connection;    
    try {
        // 데이터베이스 연결 시도
        connection = await oracledb.getConnection(dbconfig);

        // 회원 탈퇴 로직 (여기에서는 예시로만 표시)
        const sql = `
        DELETE FROM USERS WHERE U_ID = :userId
        `
        const bind = {userId};

        // db 명령 시도 후 저장
        await connection.execute(sql, bind);   
        await connection.commit();
        
        // 회원 탈퇴 성공
        console.log('회원 탈퇴 성공 : '+userId)
        return { isSucceed: true, error: null };
    } catch (err) {
        return { isSucceed: false, error: err.message };
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection', err);
            }
        }
    }
}

// 함수 내보내기
module.exports = db_userDelete