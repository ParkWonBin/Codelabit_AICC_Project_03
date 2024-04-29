const express = require('express');
const router = express.Router();
const db = require('../db/db_userDelete');

router.get('/', async(req,res) =>{
    res.render('userDelete')
})

router.post('/', async (req, res) => {
    const {password, confirmPassword} = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('비밀번호가 일치하지 않습니다.');
    }

    const conn = await db.getConnection();

    const sql = 'delete from users where username = :username';
    const bind = {
        username: req.session.username
    };

    await conn.execute(sql, bind);
    await conn.commit();
    req.session.username = null;
    res.redirect('/');
});

module.exports = router;
