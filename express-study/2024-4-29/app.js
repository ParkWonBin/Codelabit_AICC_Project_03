const express = require('express');
const app = express();
const session = require('express-session');
const port = 3000;

const oracledb = require('oracledb');
// const dbConfig = require('./dbConfig');
oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: '0904',
    resave: false,
    saveUninitialized: true
}));

// Oracle DB 연결
// oracledb.createPool(dbConfig)
//     .then(() => console.log('Oracle DB에 연결되었습니다.'))
//     .catch(err => console.error('Oracle DB 연결 오류:', err));

// 라우트 설정
app.use('/', require('./routes/index'));
app.use('/userCreate', require('./routes/userCreate'));
app.use('/userLogin', require('./routes/userLogin'));
app.use('/userPwChange', require('./routes/userPwChange'));
app.use('/userDelete', require('./routes/userDelete'));
app.use('/postMain', require('./routes/postMain'));
app.use('/postCreate', require('./routes/postCreate'));
app.use('/postUpdate', require('./routes/postUpdate'));
app.use('/postDelete', require('./routes/postDelete'));
app.use('/postRead', require('./routes/postRead'));
app.use('/myPage', require('./routes/myPage'));

// const PORT = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));