const express = require('express');
const router = express.Router();
const db = require('../db/db_postCreate'); // db.js 파일을 불러옵니다.

router.get('/', async (req, res) => {
    res.render('postCreate')
});

router.post('/', async (req, res) => {
    const {id, title, content} = req.body;
    const sql = 'INSERT INTO posts (id, title, content, author) VALUES (:id, :title, :content, :author)';
    const bind = {
        id: id,
        title: title,
        content: content,
        author: req.session.username
    };

    await db.executeQuery(sql, bind);
    res.redirect('/postMain');

});

module.exports = router;
