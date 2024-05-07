## 채팅 관련 배경지식
서버는 수동적으로 요청을 받고, 응답하는 식으로 다뤄왔는데.  
요청하지 않아도 실시간으로 데이터를 쏴주는 기능이 필요할 떄가 있다. (코인가격, 채팅 등)

서버와 요청을 주고 받는 방식은 3가지가 있다.
1. HTTP 요청
    편지 같은 것 : 일반적인 요청,유저가 요청을 해야 응답(TCP,UDT) 
2. Server sent events
    라디오 같은 것 : 서버가 원할 때 유저에게 데이터 전송(일방적으로 유저에게 전송만 가능)
    유저가 서버에게 SSE 사용하겠다고 하면, 서버가 SSE 적용해주는 것임
3. Websocket
    전화 같은 것 : 빠르고 가볍게 양방향으로 통신. 

필요한 상황
1. HTTP : 일반적인 요청
2. Server sent events : 서버에서 계속 데이터 전송이 필요할 떄
3. Websocket : 실시간 서버-유저 양방향 통신이 필요할 때.

## 채팅 구현 관련
웹상에 모든 기능은 '글 발행'기능과 같다.  
체팅방도 사실 글 하나를 발행하는 것과 같다고 생각하는 게 좋다.  
체팅방 안에 참여 인원을 관리하는 것 처럼. 체팅은 댓글처럼.  

당근마켓 같은 사이트 기능명세 
1. 글마다 채팅 버튼 누르면 채팅방 생성
2. 내가 속한 채팅방 목록 페이지 있음
3. 채팅방 누르면 채팅방 상세페이지 보여줌
4. 메시지 전송시 상대에게 전달/DB에 저장


- 채팅방 생성 : 채팅방 테이블 내 레코드 추가 (참여자_목록,  생성일) 등 전송.
- 채팅방 조회 : 로그인중인 유저가 포함된 채팅방 전체 조회
- 채팅방 수정 : 참여 인원 바꿔보기
- 채팅방 삭제 : 삭제

대충 EJS 에서 

## 웹소켓 구현
설치
```
npm install socket.io@4
```
세팅
- require 여러개
- app.listen 대신 server.listen 써야함
```js
const { createServer } = require('http')
const { Server } = require('socket.io')
const server = createServer(app)
const io = new Server(server) 
//....
app.listen(생략)
server.listen(생략) // DB연결하자마자 넣으면 좋음.
//..
```
화면에서는 이렇게 가져옴
```html
<script src="https://cdn.jsdelivr.net/npm/socket.io@4.7.2/client-dist/socket.io.min.js"></script>
<script>
  // 서버 생성
  const socket = io() // 유저의 웹소켓 연결 끝

  // 서버로 데이터 전송
  io.on('connection',(socket)=>{
    // 어떤 유저가 웹소켓에 연결할 떄마다 아래 내용을 실행시켜줌
  })
</script>


<!-- 유저가 data를 발송하고 싶을 때 -->
<script>
    const socket = io()
    // 클라이언트 -> 서버 : age라는 key로 데이터 전송하기
    socket.emit('age','20')
    
    // 서버 -> 클라이언트 : name이라는 key로 전송받은 데이터 처리
    socket.on('name',(data)=>{
        console.log(data)
    })

    // 서버에게 룸에 join하도록 요청 보내기 
    socket.emit('ask-join','1')
</script>
```

라우터에서는 이렇게 받음
```js
// 라우터에 이렇게 설정
io.on('connetion', (socket)=>{
    // 이것도 이벤트명 등록하고, on으로 해당 key로 데이터 오는지 확인하자.
    socket.on('age',(data)=>{
        console.log('유저가 보낸거',data)
        io.emit('name','kim')
    })
    // 서버에서 유저를 유저를 보낸다.
    socket.on('ask-join', (data)=>{
        // 이렇게 하면 해당 room 번호에 유저를 할당할 수 있다. (채팅방에 사람 추가)
        socket.join(data)
    })
})
```

----------
```html
<button class='chat-button'>버튼</button>

<!-- 유저가 특정 room에 메시지 보내기 -->
<!-- 전송 버튼이 있다고 가정하고 -->
<script src="https://cdn.jsdelivr.net/npm/socket.io@4.7.2/client-dist/socket.io.min.js"></script>
<script>
  // 서버 생성
  const socket = io() // 유저의 웹소켓 연결 끝
  socket.emit('ask-join','1')
  documnet.querySelector('.chat-button').addEventListenr('click',function(){
    socket.emit('message',{msg:'반가워',room:'1'})
  })

  socket.on('broadcast',(data)=>{
    console.log(data)
  })
</script>
```

```js
io.on('connetion', (socket)=>{
    // 서버에서 room에 유저를 보낸다.
    socket.on('ask-join', (data)=>{
        socket.join(data)
    })

    socket.on('message',(data)=>{
        // io.emit()// 모든 유저에게 전달됨
        io.to(data.room).emit('broadcast',data.msg)
    })
})
```

웹소켓에서 현재 로그인 중이 유저 정보 표시
https://socket.io/how-to/use-with-express-session



----------------
### server sent event
http 요청의 경우 서버가 응답하는 경우 연결이 끊김.
server sent event 는 그 연락을 유지한 상태로 응답하는 것. 

##### server sent event 요령
1. header 를 'Connection':'keep-alive'로 설정
2. 응답.write(정송할 데이터)
이렇게 응답을 쌓는다.
```js
//(server.js)

app.get('/stream/list', (요청, 응답) => {

  응답.writeHead(200, {
    "Connection": "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });

    setInterval(()=>{
     // space까지 규칙 지켜서  res.write 2번 써야함. 이벤트명, data 둘다
    응답.write('event: msg\n');
    응답.write('data: 바보\n\n');
  },1000)

  // mongoDB에서 change stream 이벤트를 받아서 연결하면 좋음.
  // 해당 이벤트는 document 항목이 바뀔 때마다 호출되는 이벤트.

});
```
위에서 보낸 데이터 받아서 표현하는 내용
```html
(list.ejs)

<script>
  let eventSource = new EventSource('/stream/list')
  eventSource.addEventListener('msg', function (e){
    console.log(e.data);
  });

</script>
```

##### MognoDB change stream
```js 
let condition = [
    { $match:{'fullDocument.title':'바보'}}
]

// 새로운 게시글이 업로드 될 때마다 작동하도록 하고 싶음.
let condi_updateOnly = [
    { $match:{'operationType':'insert'}}
]

// watch 에 아무것도 안넣으면  CUD 모두에 대해 모두 작동함
let changeStream = db.collection('post').watch(condi_updateOnly)
changeStream.on('change',(result)=>{
    console.log(result.fullDocument) 
    // 이제 여기에 응답 보내는 것만 넣으면 됨.
    응답.write('event: msg\n');
    응답.write('data: 바보\n\n');
})

// 예시 -----------
app.get('/stream/post', (요청, 응답) => {
  응답.writeHead(200, {
    "Connection": "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  })

  const 찾을문서 = [
      { $match: { operationType: 'insert' } }
  ]

  // get 안에 있으면 성능상 이슈 있을 수 있으므로, 위치를 라우터가 아니라 서버 띄우는 데에 있게 하면 좋다.
  let changeStream = db.collection('post').watch(찾을문서)
  changeStream.on('change', (result) => {
    console.log('DB변동생김')
    응답.write('event: msg\n')
    응답.write(`data: ${JSON.stringify(result.fullDocument)}\n\n`)
  })
});
```

변경사항 받아와서 화면에 표시

```html
<script>
  let eventSource
  eventSource = new EventSource('/stream/post')
  eventSource.addEventListener('msg', function (e){
    console.log(e.data)
    let 가져온거 = JSON.parse(e.data)
    document.querySelector('.white-bg').insertAdjacentHTML('afterbegin', `<div class="list-box"><h4>${가져온거.title}</h4></div>`)
  })
</script> 
```