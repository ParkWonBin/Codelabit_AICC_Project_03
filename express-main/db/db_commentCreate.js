const oracledb = require('oracledb');
const dbconfig =require("../dbconfig")

// db연결하여 댓글 등록하는 함수 정의
const db_commentCreate = async(content, userIdx, postIdx, parentIdx)=>{
    let connection;    
    try {
        // 데이터베이스 연결 시도
        connection = await oracledb.getConnection(dbconfig);

        // 게시글 등록 로직 
        const sql = `
        INSERT INTO comments (idx, c_content, c_author, c_post${parentIdx ? ", c_parent" : ""})
        VALUES (comment_seq.NEXTVAL, :content, :userIdx, :postIdx${parentIdx ? `, ${parseInt(parentIdx)}` : ""})
        `
        // db 명령 시도 
        const bind = {content,userIdx,postIdx}
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
module.exports = db_commentCreate