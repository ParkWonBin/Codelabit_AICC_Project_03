const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'});

router.get('/', async (req, res) => {
    res.render('userLogin');
});

router.post('/', async (req, res) =>{
    const {username, password} = req.body;

    const conn = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe'
    });

    const sql = 'select username, password from users where username = :username and password = :password'
    const bind = {
        username : username,
        password : password
    }

    const result = await conn.execute(sql, bind);

    if(result != null){
        req.session.username = username;
        // req.session.password = password
        res.redirect('/postMain');
        // res.redirect('/')
    }
});

module.exports = router;