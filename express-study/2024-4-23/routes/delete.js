// routes/delete.js

const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir: 'C:\\JHLee\\Util\\instantclient_21_13'});

router.post('/:id', async (req, res) => {
    const postId = req.params.id;

    const conn = await oracledb.getConnection(
        {
            user: 'username',
            password: '0904',
            connectString: 'localhost:1521/xe' // 실제 Oracle DB의 호스트, 포트 및 서비스 이름으로 변경
        }
    );

    const sql = 'delete from posts where id = :id';
    const bind = {id: postId}

    await conn.execute(sql, bind);

    // 게시글 삭제
    // await conn.execute('DELETE FROM posts WHERE id = :id', [postId]);
    await conn.commit();
    // await conn.close();

    res.redirect('/'); // 삭제 후 홈페이지로 redirect
});

module.exports = router;