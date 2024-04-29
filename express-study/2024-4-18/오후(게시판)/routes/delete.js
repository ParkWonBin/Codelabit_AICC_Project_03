// routes/delete.js

const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

oracledb.initOracleClient({ libDir: 'C:\\JHLee\\Util\\instantclient_21_13' });

router.post('/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const conn = await oracledb.getConnection(
            {
            user: 'username',
            password: '0904',
            connectString: 'localhost:1521/xe' // 실제 Oracle DB의 호스트, 포트 및 서비스 이름으로 변경
            }
        );

        // 해당 ID의 게시글이 존재하는지 확인
        const checkResult = await conn.execute('SELECT COUNT(*) FROM posts WHERE id = :id', [postId]);
        const existingPostCount = checkResult.rows[0][0];

        if (existingPostCount === 0) {
            // 해당 ID의 게시글이 존재하지 않으면 오류 응답
            return res.status(404).send('해당 ID의 게시글이 존재하지 않습니다.');
        }

        const sql = 'DELETE FROM posts WHERE id = :id';
        const bind = {id:postId}

        await conn.execute(sql, bind);

        // 게시글 삭제
        // await conn.execute('DELETE FROM posts WHERE id = :id', [postId]);
        await conn.commit();
        await conn.close();

        res.redirect('/'); // 삭제 후 홈페이지로 redirect

    } catch (err) {
        console.error('게시글 삭제 오류:', err);
        res.status(500).send('게시글을 삭제하는 중 오류가 발생했습니다.');
    }
});

module.exports = router;

