const PORT = process.env.EXPRESS_PORT || 4000;
const app = require('./appInitSetting')

// 라우트 설정
// 1. react 하위 경로로 오는 모든 요청은 '/react'로 이동시켜줌
app.get('/react/*',(req,res)=>res.redirect('/react'))
// 2. react에서 homepage 설정을 해놨기 때문에 해당 하위경로로 리소스 요청함.
// app.use('/react',express.static(path.join(__dirname, '/build'))) 
// appInitSetting 에서 이미 수행한 내용.

app.use('/dev', require('./routes/dev'));
app.use('/index', require('./routes/index'));
app.use('/api/kakao/maps', require('./api/kakoMaps'));

app.use('/userLogin', require('./routes/userLogin'));
app.use('/userCreate', require('./routes/userCreate'));
app.use('/userDelete', require('./routes/userDelete'));
app.use('/postCreate', require('./routes/postCreate'));
app.use('/postReadBoard', require('./routes/postReadBoard'));
app.use('/postReadDetail', require('./routes/postReadDetail'));



// app.use('/userPwChange', require('./routes/userPwChange'));
// app.use('/userDelete', require('./routes/userDelete'));
// app.use('/postMain', require('./routes/postMain'));
// app.use('/postUpdate', require('./routes/postUpdate'));
// app.use('/postDelete', require('./routes/postDelete'));
// app.use('/postRead', require('./routes/postRead'));
// app.use('/myPage', require('./routes/myPage'));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/index`)
});