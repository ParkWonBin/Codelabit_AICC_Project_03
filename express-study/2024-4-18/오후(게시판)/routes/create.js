// routes/create.js
const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

// oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'});

router.post('/', async (req, res) => {
    const {id, title, content } = req.body;
    try {
        const conn = await oracledb.getConnection({
            user: 'username',
            password: '0904',
            connectString: 'localhost:1521/xe' // 이 부분을 실제 Oracle DB의 호스트, 포트 및 서비스 이름으로 변경하세요.
        });

        const sql = `INSERT INTO posts (id, title, content) VALUES (:id, :title, :content)`;
        const bind = {
            id : id,
            title : title,
            content : content
        };

        await conn.execute(sql, bind);

        // await conn.execute(`INSERT INTO posts (id, title, content) VALUES (:id, :title, :content)`, [id, title, content]);
        await conn.commit();
        await conn.close();
        res.redirect('/');


    } catch (err) {
        console.error('게시글 생성 오류:', err);
        res.status(500).send('게시글을 생성하는 중 오류가 발생했습니다.');
    }
});

module.exports = router;
