const oracledb = require('oracledb');
const dbconfig = require("../dbconfig");

const db_postReadDetail = async (postIdx) => {
    let conn;

    try {
        // db 연결
        conn = await oracledb.getConnection(dbconfig);
        
        const bind = {postIdx};
        const sql = `
SELECT 
    c.idx, 
    c.c_content AS content, 
    c.c_author AS author_idx,
    u.u_id AS author_id, 
    u.u_name AS author_name, 
    c.c_post AS post_id, 
    c.c_parent AS parent_idx, 
    c.c_created AS created
FROM 
    comments c
JOIN 
    users u ON c.c_author = u.idx
WHERE 
    c.c_post = :postIdx
`
        const commentsDataraw = await conn.execute(
            sql, bind, { 
                outFormat: oracledb.OUT_FORMAT_OBJECT,
                fetchInfo:{content:{type:oracledb.STRING }}
             }
        );
        let commentsData =[]
        if (commentsDataraw.rows.length>0){
            commentsData = commentsDataraw.rows.map(row=>{
                return {
                    idx:row.IDX,
                    content:row.CONTENT,
                    authorId:row.AUTHOR_ID,
                    authorIdx:row.AUTHOR_IDX,
                    authorName:row.AUTHOR_NAME,
                    postId:row.POST_ID,
                    parentIdx:row.PARENT_IDX,
                    created: row.CREATED.toISOString().split('T')[0]
                }
            })
        } 
        return commentsData;

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
