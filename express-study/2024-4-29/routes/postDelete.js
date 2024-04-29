// postDeleteRoutes.js

const express = require('express');
const router = express.Router();
const db = require('../db/db_postDelete'); // db.js 파일을 불러옵니다.

// 데이터베이스 초기화 함수 호출


router.post('/:id', async (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM posts WHERE id = :id';
    const bind = {id: id};

    await db.executeQuery(sql, bind);
    res.redirect('/postMain');
});

module.exports = router;
