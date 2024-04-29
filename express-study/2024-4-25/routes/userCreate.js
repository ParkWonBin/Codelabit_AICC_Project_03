const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'});

router.get('/', async (req, res) => {
    res.render('userCreate');
});

router.post('/', async (req, res) => {
    const {userid, username, password, confirmPassword} = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('비밀번호가 일치하지 않습니다.');
    }

    const conn = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe'
    });

    const sql = 'insert into users (userid, username, password) values (:userid, :username, :password)';
    const bind = {
        userid : userid,
        username : username,
        password : password
    };

    await conn.execute(sql, bind);

    await conn.commit();
    // await conn.close();
    res.redirect('/')
});

module.exports = router;