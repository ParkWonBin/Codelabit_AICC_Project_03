const oracledb = require('oracledb');
const dbconfig = require("../dbconfig");

const db_postReadDetail = async (postId) => {
    let conn;

    try {
        // db 연결
        conn = await oracledb.getConnection(dbconfig);
        
        // 명령 생성 및 실행
        const bind = {postId};
        const sql = `
SELECT 
    p.idx, 
    p.p_title AS title, 
    p.p_content AS content, 
    p.p_author AS author_idx,
    u.u_id AS author_id, 
    u.u_name AS author_name, 
    p.p_created AS created
FROM 
    posts p
JOIN 
    users u ON p.p_author = u.idx
WHERE 
    p.idx = :postId
`        
        const postDataraw = await conn.execute(
            sql, bind,{ 
                outFormat: oracledb.OUT_FORMAT_OBJECT,
                fetchInfo:{content:{type:oracledb.STRING }}
             }
        );
        let postData = {idx:'',title:'',content:'',author:'',created:'',error:'조회불가'}
        if(postDataraw.rows.length>0){
            postData= {
                idx: postDataraw.rows[0].IDX,
                title: postDataraw.rows[0].TITLE,
                content: postDataraw.rows[0].CONTENT,
                authorId: postDataraw.rows[0].AUTHOR_ID,
                authorIdx: postDataraw.rows[0].AUTHOR_IDX,
                authorName: postDataraw.rows[0].AUTHOR_NAME,
                created: postDataraw.rows[0].CREATED.toISOString().split('T')[0],
                error: null
            };
        }
        return postData;

    } catch (err) {
        console.error('Error during database query', err);
        throw err;  // Re-throw the error to handle it in a higher layer or log it
    } finally {
        if (conn) { // Ensure the connection is closed even if there is an error
            try {
                await conn.close();
            } catch (err) {
                console.error('Error closing connection', err);
            }
        }
    }
}

module.exports = db_postReadDetail;
