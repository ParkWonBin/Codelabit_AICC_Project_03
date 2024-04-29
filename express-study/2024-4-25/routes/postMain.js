const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir: 'C:\\JHLee\\Util\\instantclient_21_13'});

router.get('/', async (req, res) => {
    res.render('postMain'); // resultJson 전달
});

router.post('/', async (req, res) => {
    req.session.username = null;
    res.redirect('/')
});

router.post

module.exports = router;
