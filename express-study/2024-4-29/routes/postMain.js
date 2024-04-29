const express = require('express');
const router = express.Router();
const db = require('../db/db_postMain'); // db.js 파일을 불러옵니다.

// 데이터베이스 초기화 함수 호출


router.get('/', async (req, res) => {
    // 데이터베이스에서 게시글 가져오기
    const sql = 'SELECT * FROM posts';
    const posts = await db.executeQuery(sql, {});
    res.render('postMain', {posts: posts});
});

router.post('/', async (req, res) => {
    req.session.username = null;
    res.redirect('/');
});

module.exports = router;
