## 환경변수
설치
```
npm install dotenv
```
프로젝트 루트 위치에 ```.env``` 파일 생성
```env
PORT=8080
```

```js
require('dotenv').config // 이렇게 쓰면 사용 가능
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT} 에서 서버 실행중`)
})
```

## 미들웨어
수백개의 api안에서 로그인 여부를 검사한다면 너무 귀찮기 때문에.
함수로 감싸서 할 수 있다. 
```js
function checkLogin(req,req,next){
    // 응답도 자유롭게 가능하다.
    if(!req.user){
        res.send('로그인하세요')
    }
    // 미들웨어 실행 끝나면 next를 함수 형태로 써줘야한다.
    next() // 이거 안하면 무한대기로 빠질 수 있다.
}

// 이렇게 미들웨어 장착 가능
app.get('/' chckLogin, (req,res={
    req.sendFile(__dirname+'/index.html')
}))

// 여기 "아래"에 있는 라이터에 일괄로 미들웨어 장착해줌
// 해당 라우터 하위에 있는 요청에 대해서도 적용됨.
// 순서상 use명령보다 위서 정의된 라우터에는 적용되지 않음.
app.use('/URL', checkLogin)

```

## 이미지 업로드 - s3 연결 설정
AWS의 S3이용해서 하는 방법
1. ```IAM > 사용자``` 여기서 사용자 계정을 만든다.
2. 사용자 생성 > 정책연결 > S3 full acess 넣어주기
3. 액세스키 만들기. 로컬에서 확인하려면 "로컬코드"로 생성하기
4. [ARN, 액세스키, 액세스비밀키 ] 잘 보관해두기
5. 버킷 생성 - 모두 차단 해제 후 잘 되면 몇가지 제한 거는게 나음.
6. 해당 버켓에 권한설정 (버킷정책 편집 권장, ACL은 옛날에 하던 방식)
7. 버킷 정책 편집   
    Principal은 누가 해당 권한을 가졌는지 하도록 하는 것임
   1. 정책1
      1. Effect : "Allow"
      2. Principal : "*" (전체허용) 
      3. Action : "s3:GetObject" 
      4. Resource : "arn:aws:s3:::버킷명/*"
   2. 정책2
      1. Effect : "Allow"
      2. Principal : {"AWS":본인ARN 입력}
      3. Action : ["s3:PutObject","s3:DeleteObject"]
      4. Resource : "arn:aws:s3:::버킷명/*"
1. CORS는 보안설정
```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["PUT","POST"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": ["ETag"]
  }
] 
```

## 이미지 업로드 - multer s3 연결
- multer : 유저가 보낸 파일 다루기 쉬워짐
- mulster-s3 : 그 파일을 S3에 업로드 도와줌
- @aws-sdk/client-s3 : AWS를 node에서 사용할 떄 필요함
### 설치
```
npm install multer 
npm install multer-s3
npm install @aws-sdk/client-s3
```
### 사용
```js
const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')
const s3 = new S3Client({
  region : 'ap-northeast-2',
  credentials : {
      accessKeyId : process.env.S3_KEY,
      secretAccessKey : process.env.S3_SECRET
  }
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    key: function (요청, file, cb) {
      cb(null, Date.now().toString()) //업로드시 파일명 변경가능
    }
  })
})

// 'img1'이란 name속성을 가진 input에서 이미지가 들어오면 처리
app.post('/add', upload.single('img1'), (요청, 응답) => {
  console.log(요청.file) // 이 안에 해당 파일 들어가있음.
  await db.collection('post').insertOne({
    title : 요청.body.title,
    content : 요청.body.content,
    img : 요청.file.location
  })
  (생략)
}) 
```
여러개 파일 업로드 하려고 한다면 input 속성에 ```multiple```을 추가한다.
```html
<form action='/add' method='POST' enctype='multipart/form-data'>
    <h4>글쓰기</h4>
    <input name="title">
    <input name="content">
    <input type="file" name="img1" accept="image/*" multiple>
    <button type='submit'>전송</button>
</form>
```
그리고 미들웨어 장착할 때 single이 아니라 array 를 사용한다.
```js
// name 속성이 'img1'인 input에 들어온 파일을 최대 2개 가져온다.
app.post('/add', upload.array('img1',2), (req,res) => {
    
})

app.post('/add', upload.single('img1'), (req,res) => {
    console.log(req.file) // 업로드한  파일의 정보를 가져올 수 있음.
    console.log(req.file.location) // s3설정했으면, 업로드 위치 보여줌, DB에 저장
    
})
```
에러처리 하고 싶으면 미들웨어로 사용하지 않고 함수로 쓰는게 좋다.
```js
// name 속성이 'img1'인 input에 들어온 파일을 최대 2개 가져온다.
app.post('/add', (req,res) => {
     upload.single('img1')(req,res,(err)=>{
        // 에러 발생 시 바로 응답해버리기
        if (err) return res.send('업로드 에러')
     })
    // DB에 요청 성공한 내역 적재하는 코드
})
```

## 검색기능 만들기 - 정규식
모든 게시글 전체 조회해서 비교하는 방법
```js
app.get('/search', async (요청, 응답)=>{
  let result = await db.collection('post').find({title : {$regex : 요청.query.val} }).toArray()
  응답.render('search.ejs', {글목록 : result})
}) 

```
## 검색기능 만들기 - search index 
몽고db의 경우 indexes 탭에서 인덱스 생성 가능.
{필드명:데이터 타입} 으로 입력한다.
가령 문자열과 숫자는 이렇게 입력한다.
{'title':'text'}
{'like':1}
```js
// 전체 스캔하여 찾기
db.collection().find( { title : '안녕' } ).explain('executionStats')
// executionStages.stage : 'COLLSCAN' 전체 스캔

// index 사용하여 찾기
db.collection().find( { $text : { $search: '안녕' } } ).explain('executionStats')
// executionStages.stage : 'TEXT_MATCH'  
```

익덱스 장점 :
 - 미리 정렬해뒀으므로 빠르고 효율적으로 조회됨.
 - 숫자 등 대소
인덱스 단점 : 
 - 데이터 생성,수정,삭제 시 index 다시 계산해야함.
 - 정규식 사용하면 전체 스켄해야 하므로 성능 차이 없음.

## 관계DB 비관계DB 비교
관계형 DB는 table별로 데이터 따로 관리하고, 게시글 보여줄 때 다 JOIN하는게 좋은 관습.
비관계형 DB는 비정규화를 해서 필요한 데이터를 다 입력해놓고 쓰는게 좋은 관습.

관계형 DB는 나중에 데이터의 값이 변해도, 항상 정확한 데이터를 가져올 수 있어 좋음
비관계형 DB는 JOIN을 하지 않으므로, 입출력이 빠름. 대신 데이터가 outdate될 수 있음.

그래서 몽고DB를 쓸 때는 비정규화해서 모든 데이터를 집어넣는다.

댓글 기능처럼 JOIN이 필요한 데이터가 있는 경우,
document(table같은거)를 따로 빼서 ID값 같은걸 따로 들고오게 해서 합치는게 좋음.

#### 참고
ejs에서 include 연산 가능하다.그래서 nav등 중복되는 부분은 include로 관리하자