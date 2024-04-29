const express = require('express');
const router = express.Router();
const db = require('../db/db_userPwChange');

router.get('/', async(req, res) =>{
    res.render('userPwChange');
})

router.post('/', async (req, res) => {
    const {newPassword, confirmNewPassword} = req.body;

    if (newPassword !== confirmNewPassword) {
        return res.status(400).send('비밀번호가 일치하지 않습니다.');
    }

    const conn = await db.getConnection();

    const sql = 'update users set password = :newPassword where username = :username';
    const bind = {
        newPassword: newPassword,
        username: req.session.username
    };

    await conn.execute(sql, bind);
    await conn.commit();
    res.redirect('/postMain');

});

module.exports = router;
