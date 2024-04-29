const oracledb = require('oracledb');
const dbConfig = require('../dbConfig');

const db_delete = async (id, title, content) =>{
    let conn;

    conn = await oracledb.getConnection(dbConfig);

    const sql = 'DELETE FROM posts WHERE id = :id';
    const bind = {id:postId}

    await conn.execute(sql, bind);

    await conn.commit();
    await conn.close();
}

module.exports = db_delete;