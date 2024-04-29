// routes/index.js

const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir: 'C:\\JHLee\\Util\\instantclient_21_13'});

router.get('/', async (req, res) => {
    res.render('index'); // resultJson 전달
});

module.exports = router;