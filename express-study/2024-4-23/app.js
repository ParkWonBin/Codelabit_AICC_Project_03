// app.js

const express = require('express');
const app = express();

// const oracledb = require('oracledb');
// const dbConfig = require('./dbConfig');
// oracledb.initOracleClient({libDir:'C:\\JHLee\\Util\\instantclient_21_13'});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Oracle DB 연결
// oracledb.createPool(dbConfig)
//     .then(() => console.log('Oracle DB에 연결되었습니다.'))
//     .catch(err => console.error('Oracle DB 연결 오류:', err));

// 라우트 설정
const indexRoute = require('./routes/index');
const createRoute = require('./routes/create');
const readRoute = require('./routes/read');
const updateRoute = require('./routes/update');
const deleteRoute = require('./routes/delete');

app.use('/', indexRoute);
app.use('/create', createRoute);
app.use('/read', readRoute);
app.use('/update', updateRoute);
app.use('/delete', deleteRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`));