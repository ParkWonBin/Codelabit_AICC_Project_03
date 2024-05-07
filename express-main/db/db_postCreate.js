const oracledb = require('oracledb');
const dbconfig =require("../dbconfig")

// db연결하여 게시글 등록하는 함수 정의
const db_postCreate = async(title,content,userIdx)=>{
    let connection;    
    try {
        // 데이터베이스 연결 시도
        connection = await oracledb.getConnection(dbconfig);

        // 게시글 등록 로직 
        const sql = `
        INSERT INTO posts (idx, p_title, p_content, p_author) 
        VALUES (post_seq.NEXTVAL, :title, :content, :userIdx)
        RETURNING idx INTO :idx
        `
        const bind = {
            userIdx,
            title,
            content,
            idx: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }};

        // db 명령 시도 후 저장
        const result = await connection.execute(sql, bind);   
        
        // 게시글 등록 성공
        const postIdx = result.outBinds.idx[0]; 

        return { isSucceed: true, error: null, postIdx };
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
module.exports = db_postCreate