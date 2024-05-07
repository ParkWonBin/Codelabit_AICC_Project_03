const oracledb = require('oracledb');
const dbconfig = require("../dbconfig");

const db_postReadBoard = async () => {
    let conn;

    try {
        // db 연결
        conn = await oracledb.getConnection(dbconfig);

        // 명령 생성 및 실행
        const sql = `
    SELECT 
        p.idx AS idx, 
        p.p_title || ' (' || COALESCE(c.comment_count, 0) || ')' AS title,
        u.u_name AS author, 
        p.p_created AS created
    FROM 
        posts p
    LEFT JOIN 
        users u ON p.p_author = u.idx
    LEFT JOIN 
        (SELECT 
             c_post, 
             COUNT(*) AS comment_count  
         FROM 
             comments
         GROUP BY 
             c_post
        ) c ON p.idx = c.c_post  
    WHERE 
        p.p_author IS NOT NULL
    ORDER BY 
        p.p_created DESC
`;
        const bind = {}; // No bind variables in this query

        const result = await conn.execute(sql, bind, { outFormat: oracledb.OUT_FORMAT_OBJECT });
        // console.log(result)

        // Create a structured object with the desired format
        const formattedData = result.rows.map(row => ({
            idx: row.IDX,
            title: row.TITLE,
            author: row.AUTHOR,
            datetime: row.CREATED ? row.CREATED.toISOString().split('T')[0] : 'No Date'
        }));

        // Return the structured data
        return formattedData;

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

module.exports = db_postReadBoard;
