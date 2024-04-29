// routes/create.js
const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'});

router.get('/', async (req, res) => {
    res.render('create')
});

router.post('/', async (req, res) => {
    const {id, title, content } = req.body;

    const conn = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe'
    });

    const sql = 'INSERT INTO posts (id, title, content) VALUES (:id, :title, :content)';
    const bind = {
        id : id,
        title : title,
        content : content
    };

    await conn.execute(sql, bind);

    await conn.commit();
    // await conn.close();
    res.redirect('/')
});

module.exports = router;
