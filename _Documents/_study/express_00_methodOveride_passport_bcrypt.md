expres
# Part2-수정기능3(methode-override)
form 테그로 put 요청 넣어보기
1. ```npm install method-override```
2. 미들웨어 설정
```js
const methodOverride = require('method-override')
app.use(methodOverride('_methode'))
```
3. 요청화면 form테그 설정
form 테그 메소드는 POST로 놓되, 쿼리 파라미터로 '_method=PUT'설정
```html
<form action='/edit?_method=PUT' method='POST'>
    <button type='submit'>전송</button>
</form>
```

# 삭제기능만들기(AJAX)
가끔 요청 보낼 떄 body 키값에 데이터 넣어서 보내면 안갈 떄 있어서.
간단한 기능은 url 내 parameter, query 사용해서 데이터를 실어보낸다.
```html
<div>
    <h3>게시글제목</h3>
    <span class='delete/123' data-id="20">삭제</span>
</div>

<script>
    document.querySelectorAll('.delete')[0]
    .addEventListener('click', function(e){
        // 해당 테그의 'data-id' 속성의 값 가져오기
        console.log(e.target.data.id )

        // AJAX 쓰는법
        fetch('/abc?데이터명=데이터값', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringfy({a:1})
        })
        .then((r)=>r.text())
        .then((r)=>{
            // 새로고침 하기 싫으면 display 속성으로 끄기
            // e.target이 해당 테그를 나타내므로 상위테그 안보이게 처리
            e.target.parentElement.style.display = 'none'
        })
    })
</script>
```

# 회원관리
### 설치
- express-session : 세션 만들 떄 사용
- passport : 회원인증
- passport-local : id/pw 방식으로 인증
```
npm install express-session
npm install passport
npm install passport-local
```


### 요약
1. 로그인 성공하면 세션 document(몽고DB에서 record)를 만들고 쿠키를 유저에게 보내줌
   - passport.serializeUser() 쓰면 자동으로 해줌.
2. 유저가 쿠키 제출 시 확인해보기
   - passport.deserializeUser() 쓰면 자동으로 해줌.
3. 위에서 설정 다 잡아봤으면 현재 로그인한 유저는 req.user 로 데이터 얻어올 수 있음.


### 사용
```js
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

// 아래 순서 잘 지켜서 만들도록
app.use(passport.initilize())
app.use(session({
    secret:'암호에 쓸 비번', // 이거 털리면 서버 데이터 다 유출될 수 있음
    resave:false, // 유저가 요청할 때마다 다시 저장할지 여부
    saveUninitialized:false, // 로그인 안해도 세션 만들 것인지
    cookie : {maxAge: 60*60*1000} // 쿠키 유효기간, 밀리초단위로 입력
}))
app.use(passport.session())

app.get('/login', (요청, 응답)=>{
  응답.render('login.ejs')
}) 

// 유저가 제출한 id/pw가 맞는지 검증하는 코드(설정)
// 예외처리를 하고 싶으면 해당 내용 내부에 try-catch 씌위기.
// 다른 추가적인 정보가 필요하면 passReqToCallback 옵션 찾아보기
passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
    // 여기에 db에 요청을 보내서 비밀번호를 받아옴
    let result = await db.collection('user').findOne({ username : 입력한아이디})
    if (!result) {
        // id 가 없는 경우
        return cb(null, false, { message: '아이디 DB에 없음' })
    }
    if (result.password == 입력한비번) {
        // 비밀번호가 맞는 경우
        return cb(null, result)
    } else {
        // 비밀번호가 틀린 경우
        return cb(null, false, { message: '비번불일치' });
    }
}))
// passport.authenticate('local')() 쓰면 위의 코드에서 설정한게 실행이 된다.


// 세션 만들기, 쿠키를 발행하는 역할을 한다.
passport.serializeUser((user,done)=>{
    // 다음 코드가 실행될 떄 여기로 진입됨
    // 요청.logIn(user, (err) => {...
    console.log(user)

    process.nextTick(()=>{
        // 세션에 저장할 내용
        const data ={
            id:user._id,
            username : user.username
        }
        done(null, data)
        // 여기에 기록된 데이터를 쿠키에 담아줄 것임.
        // 아무 설정 안하면 2주동안 로그인 상태가 유지됨
        // 유효기간 설정은 session 설정 시 cookie : {maxAge: 60*60*1000} 이렇게 밀리초단위로 기록
    })
})

// 세션 해독, 쿠키를 .분석하는 역할을 한다.
// 여기 있는 내용이 기본형이다.
// passport.deserializeUser((user,done)=>{
//     process.nextTick((=>{
//         done(null,user)
//     }))
// }) // 이걸 해두면 아무대서나 req.user 라고 입력하면 해당 정보를 가져올 수 있음.
// 당연히 해당 설정이 설정된 이후에서만 기능을 사용할 수 있기 떄문에 라우팅하기 전에 설정할 것

// 이렇게 설정하면 해당 쿠키로부터 id를 가져와서, db로부터 최신 데이터를 받아와 req.user에 넣는다.
passport.deserializeUser(async (user,done)=>{
    let result = await db.collection('user').findeOne({_id:newObjectId(user.id)})
    delete result.password
    process.nextTick((=>{
        done(null,result)
    }))
})


app.post('/login', async (요청, 응답, next) => {
    // 여기에서 좀전에 설정했던거 실행
    // 2번쨰 인수 : 인수 3개 넣을 수 있음(
        // 위에서 passport 설정할 떄 return값 유심히 보기
        // error : 설정된 내역 실행 중 에러 발생시 에러 에러 사유 들어감
        // user : 비교작업 성공 시 성공적으로 끝나면 변수 들어옴
        // info : 비밀번호 불일치 시 사유가 들어감
    passport.authenticate('local', (error, user, info) => {
        if (error) return 응답.status(500).json(error)
        if (!user) return 응답.status(401).json(info.message)
        // 세션 만들기 시작. 라이브러리 사용법이라 그냥 외움.
        요청.logIn(user, (err) => {
            // 에러 발생시 처리할 것
            if (err) return next(err)
            응답.redirect('/')
        })
    })(요청, 응답, next)

}) 
```

# 회원 정보 암호화
### 설치
```
npm install bcrypt
```
### 설정
```js
const bcrypt = require('bcrypt')
//...
app.post('/register', async(req,res)=>{
    const hashedPw = await bcrypt.hash(req.body.password,10)
    // 2번째 인자는 hash 를 몇 번 돌릴지 설정하는 것임.
    // 10번 돌리면 해싱 하나에 50ms 정도 걸리고, 해킹할 때는 1초 가까이 걸림.
    
    console.log(hashedPw) 
    // 출력 :  $2b$10$SGYD.FqXOLmnHXfOO.SFTO/vd.wXQQRzXhJ9R2Nt04K01wjSEhw/Me
    // salt : SGYD.FqXOLmnHXfOO.SFTO
    // hash : vd.wXQQRzXhJ9R2Nt04K01wjSEhw/Me
    // salt 를 쓰면 rainbow table, lookup table 공격을 방어할 수 있다.
    // salt도 db에 보관하는 것이며, db 말고 다른곳에 저장하는 것으로 pepper라는 것도 있다.

    await db.collection('user').insertOne({
        username: req.body.username,
        password: hashedPw
    })
})

// 해싱을 했다면 bcrypt에서 compare함수를 사용하여 비밀번호를 비교한다.
passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
    // db에 요청을 보내서 비밀번호를 받아옴
    let result = await db.collection('user').findOne({ username : 입력한아이디})
    if (!result) { return cb(null, false, { message: '아이디 DB에 없음' }) }

    // 해시값과 비교 시도
    const isValid = await bcrypt.compare(입력한비번, result.password)
    if (isValid) {
         return cb(null, result)
    } else {
         return cb(null, false, { message: '비번불일치' });
    }
}))

```

## 세션을 db에 저장시키는 방법
설치
```
npm install conect-mongo
```
설정
```js
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const MongoStore = require('connect-mongo') // 이거추가

// 아래 순서 잘 지켜서 만들도록
app.use(passport.initilize())
app.use(session({
    secret:'암호에 쓸 비번', // 이거 털리면 서버 데이터 다 유출될 수 있음
    resave:false, // 유저가 요청할 때마다 다시 저장할지 여부
    saveUninitialized:false, // 로그인 안해도 세션 만들 것인지
    cookie : {maxAge: 60*60*1000}, // 쿠키 유효기간, 밀리초단위로 입력
    store : MongoStore.create({
        mongoUrl : 'db접속용URL',
        dbName : 'forum'
    })
}))
app.use(passport.session())
// db요청이 너무 많아서 싫다면 radis 같은 메모리 기반이나, passport 이용하시길
```