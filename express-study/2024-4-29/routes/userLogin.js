const express = require('express');
const router = express.Router();
const db = require('../db/db_userLogin');

router.get('/', async (req, res) => {
    res.render('userLogin');
});

router.post('/', async (req, res) => {
    const {username, password} = req.body;

    const conn = await db.getConnection();

    const sql = 'select username, password from users where username = :username and password = :password';
    const bind = {
        username: username,
        password: password
    };

    const result = await conn.execute(sql, bind);

    if (result.rows.length > 0) {
        req.session.username = username;
        res.redirect('/postMain');
    } else {
        res.status(401).send('유효하지 않은 사용자 이름 또는 비밀번호입니다.');
    }
});

module.exports = router;
