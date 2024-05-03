//////// env Setting ////////////////////////
require('dotenv').config()
const cors = require('cors'); 
const path = require('path');
const express = require('express');
const session = require('express-session');

//////// DB Setting ////////////////////////
const dbConfig = require('./dbconfig')
const oracledb = require('oracledb');

oracledb.initOracleClient({
    libDir:process.env.ORACLE_CLIENT
});

oracledb.createPool(dbConfig)
    .then(() => console.log('Oracle DB에 연결되었습니다.'))
    .catch(err => console.error('Oracle DB 연결 오류:', err));

//////// Express Setting ////////////////////////
const app = express();

app.use(cors()); // react-express 요청 주고 받을 수 있도록 처리
app.use(express.json());  // req.body로 json 읽도록
app.use(express.urlencoded({ extended: true })); // req.body 로 form 읽도록

app.use('/react',express.static(path.join(__dirname, '/build')))
app.set('view engine', 'ejs');


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

module.exports = app