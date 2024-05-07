const oracledb = require('oracledb');
const dbconfig =require("../dbconfig")

// db연결하여 회원가입하는 함수 정의
const db_userCreate = async(userId, userPw, userName, kakaoId)=>{
    let connection;    
    try {
        // 데이터베이스 연결 시도
        connection = await oracledb.getConnection(dbconfig);

        
        // 회원 등록 로직 (여기에서는 예시로만 표시)
        const sql = `
        INSERT INTO users (idx, u_id, u_name, u_pw${kakaoId?', u_kakaoId':''})
        VALUES (user_seq.NEXTVAL, :userId, :userName, :userPw${kakaoId?`, ${kakaoId}`:''})
        RETURNING idx INTO :idx
        `;
        const bind = {
            userId,
            userName,
            userPw,
            idx: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
        };

        // db 명령 시도 후 저장
        const result = await connection.execute(sql, bind);

        // 회원 등록 성공, idx 값을 가져옴
        const userIdx = result.outBinds.idx[0]; 

        // 결과값 반환
        return { isSucceed: true, error: null, userIdx };
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
module.exports = db_userCreate