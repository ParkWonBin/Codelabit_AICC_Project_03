const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'});

router.get('/', async (req, res) => {
    res.render('postCreate')
});

router.post('/', async (req, res) => {
    const {id, title, content } = req.body;

    const conn = await oracledb.getConnection({
        user: 'username',
        password: '0904',
        connectString: 'localhost:1521/xe'
    });

    const sql = 'INSERT INTO posts (id, title, content, author) VALUES (:id, :title, :content, :author)';
    const bind = {
        id : id,
        title : title,
        content : content,
        author : req.session.username
    };

    await conn.execute(sql, bind);

    await conn.commit();
    // await conn.close();
    res.redirect('/postMain')
});

module.exports = router;