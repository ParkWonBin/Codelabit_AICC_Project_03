// index.js

const express = require('express');
const router = express.Router();
const db = require('../db/db_myPage'); // db.js 파일을 불러옵니다.

// 데이터베이스 초기화 함수 호출


router.get('/', async (req, res) => {
    res.render('myPage');
});

module.exports = router;
