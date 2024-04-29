const express = require('express');
const router = express.Router();
const db = require('../db/db_postUpdate'); // db.js 파일을 불러옵니다.

// 데이터베이스 초기화 함수 호출


// 수정 화면으로 이동하는 POST 요청 처리
router.post('/edit', async (req, res) => {

    const {id, title, content} = req.body;
    const bind = {id: id, title: title, content: content};
    res.render('postUpdate', bind);
});

// 게시물을 수정하는 POST 요청 처리
router.post('/', async (req, res) => {

    const {id, title, content} = req.body;
    await db.updatePost(id, title, content);
    res.redirect('/postMain');
});

module.exports = router;
