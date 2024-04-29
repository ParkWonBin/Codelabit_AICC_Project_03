const oracledb = require('oracledb');

// Oracle 클라이언트 초기화 함수


// 데이터베이스 연결 함수
async function getConnection() {

    const conn = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe'
    });
    return conn;
}

// 게시글 업데이트 함수
async function updatePost(id, title, content) {
    const conn = await getConnection();

    const query = 'UPDATE posts SET title = :title, content = :content WHERE id = :id';
    const bind = {id: id, title: title, content: content};
    await conn.execute(query, bind);
    await conn.commit();
}

module.exports = {
    getConnection,
    updatePost
};
