const express = require('express');
const router = express.Router();
const db = require('../db/db_postRead'); // db.js 파일을 불러옵니다.

// 데이터베이스 초기화 함수 호출

router.get('/', async (req, res) => {
    const sql = 'SELECT id, title, content, author FROM posts ORDER BY id DESC';
    const result = await db.executeQuery(sql, {});
    console.log(result)
    let resultJson = { data:[]};
    for (let i = 0; i < result.rows.length; i++) {
        const data = {
            id : result.rows[i][0],
            title : result.rows[i][1],
            content : result.rows[i][2],
            author : result.rows[i][3]
        };
        resultJson.data.push(data);
    }

    await conn.close();

    const bind = {
        resultJson : resultJson,
        username : req.session.username
    }
    res.render('postRead', bind);
});

module.exports = router;
