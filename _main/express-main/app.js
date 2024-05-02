const PORT = process.env.PORT || 4000;
const app = require('./appInitSetting')

// 라우트 설정
//app.get('/', (req,res)=>{res.sendFile(path.join(__dirname, '/build/index.html'))}) // 리엑트 페이지 열어주기

app.use('/dev', require('./routes/dev'));
app.use('/index', require('./routes/index'));
app.use('/api/kakao/maps', require('./api/kakoMaps'));

app.use('/userCreate', require('./routes/userCreate'));
app.use('/userLogin', require('./routes/userLogin'));
// app.use('/userPwChange', require('./routes/userPwChange'));
// app.use('/userDelete', require('./routes/userDelete'));
// app.use('/postMain', require('./routes/postMain'));
// app.use('/postCreate', require('./routes/postCreate'));
// app.use('/postUpdate', require('./routes/postUpdate'));
// app.use('/postDelete', require('./routes/postDelete'));
// app.use('/postRead', require('./routes/postRead'));
// app.use('/myPage', require('./routes/myPage'));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/index`)
});