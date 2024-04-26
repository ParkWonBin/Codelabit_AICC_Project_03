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
server.listen(생략)
//..
```
화면에서는 이렇게 가져옴
```js
<script src="https://cdn.jsdelivr.net/npm/socket.io@4.7.2/client-dist/socket.io.min.js"></script>
<script>
  const socket = io() 
</script>
```