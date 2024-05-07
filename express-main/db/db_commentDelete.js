const oracledb = require('oracledb');
const dbconfig =require("../dbconfig")

// db연결하여 댓글을 삭제하는 함수 정의
const db_commentDelete = async(postIdx,commentIdx)=>{
    let connection;    
    try {
        // 데이터베이스 연결 시도
        connection = await oracledb.getConnection(dbconfig);

        // 댓글 삭제 로직 
        const sql = `
        DELETE FROM comments WHERE idx = :commentIdx AND c_post = :postIdx
        `
        const bind = {postIdx,commentIdx};

        // db 명령 시도
        await connection.execute(sql, bind);
        
        // 댓글 삭제 성공
        console.log('댓글 삭제 성공 '+JSON.stringify(bind))
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
module.exports = db_commentDelete