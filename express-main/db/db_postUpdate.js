const oracledb = require('oracledb');
const dbconfig =require("../dbconfig")

// db연결하여 게시글 수정하는 함수 정의
const db_postUpdate = async(title,content,userIdx,postIdx)=>{
    let connection;    
    try {
        // 데이터베이스 연결 시도
        connection = await oracledb.getConnection(dbconfig);

      // 게시글 수정 로직
        const sql = `
        UPDATE posts
        SET p_title = :title, p_content = :content
        WHERE idx = :postIdx AND p_author = :userIdx
        `;
        const bind = { title, content, postIdx, userIdx };
        

        // db 명령 시도 
        const result = await connection.execute(sql, bind);   
 

        return { ...result, isSucceed: true, error: null };
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
module.exports = db_postUpdate