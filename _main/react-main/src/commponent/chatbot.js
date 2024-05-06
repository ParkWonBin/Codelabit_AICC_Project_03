import React, { useState, useEffect  } from 'react';
import './Chatbot.css'; // CSS 파일 임포트

function Chatbot() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [getMessages, setMessages] = useState([
     {role:'assistant',Msg:'코드랩 쳇봇입니다.'}
  ]);

  const toggleChatbot = async() => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const sendMessage = ()=>{
    // 입력한 내용 받아오기
    const userInput = document.getElementById('chatInput')
    const userText = userInput.value
    userInput.value = ''

    // 내용 안쓰고 전송하면 요청 안보내기
    if(userText.trim()===''){
      return null
    }

    // 일단 화면에 내용을 표시하기
    setMessages(data=>{
      return [...data,
        {role:'user',Msg:userText},
        {role:'assistant',Msg:'응답 대기중...'}
      ];
    });

    // 챗봇 대답 받아오기, 0.5초 대기 한 뒤에 마지막 대사 바꾸기
    const assistantText = `개발 준비중입니다.\n
예약 알림 받기 :
http://test.wbpark.app`

    setTimeout(() => {
      setMessages(data=>{
        const newMsgList = [...data];
        newMsgList[newMsgList.length - 1].Msg = assistantText;
        return newMsgList;
      });
    },500);

  }

 // 메시지 목록이 변경될 때 스크롤을 맨 아래로 이동
 useEffect(() => {
  const messageContainer = document.getElementById('chatMessageContainer');
  if (messageContainer) {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}, [getMessages]);  // getMessages 배열이 변경될 때마다 이 effect를 실행


  return (<>

  <div id="chatbotIcon" onClick={toggleChatbot} >Chat</div>

  {isChatbotOpen && (<div id="chatbot">
      <div id="chatTitle">
        <strong>코드랩 쳇봇</strong>
        <button id="chatbotClose" onClick={toggleChatbot}>X</button>
      </div>
      
      <div id="chatMessageContainer">
        {getMessages.map(item=>{
          return <pre class={`message ${item.role}`}>{item.Msg}</pre>
        })}
      </div>

    <div id="chatInputContainer">
      <textarea id="chatInput" placeholder="메시지를 입력하세요..."></textarea>
      <button id="chatSendBtn" onClick={sendMessage}>전송</button>
    </div>
</div>)}

</>);

}

export default Chatbot;
