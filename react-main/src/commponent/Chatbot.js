import React, { useState, useEffect  } from 'react';
import axios from 'axios';

import './Chatbot.css'; // CSS 파일 임포트
const flaskBaseURL = process.env.REACT_APP_FLASK_URL;

function Chatbot() {
  const [getTotalCost, setTotalCost] = useState(0);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [getMessages, setMessages] = useState([
    {role: 'system', content: '채팅이 시작되었습니다.\n당신은 코드랩 아카데미의 AICC과정 1기, 3차 프로젝트 1팀이 만든 쳇봇입니다. 이 쳇봇의 제작자는 박원빈,정승호,이정훈,김여진 입니다. 해당 쳇봇의 목적은 시스템 사용법을 설명해주기 위함입니다. 해당 시스템은 공공데이터의 부동산 데이터를 시각화 하여 보여주고, 이용자간 토론을 할 수 있도록 게시판 등 커뮤니티 기능을 제공합니다. "지도" 탭에서는 특정 주소를 검색하면 KakaoMap을 통해 장소 검색 및 조회를 지원하고, "통계" 탭에서는 실시간으로 공공 데이터를 불러와서 데이터를 시작화해줍니다. 데이터를 클릭하면 해당 위치를 카카오맵에 표시해줍니다. "게시판"탭에서는 회원들간 소통을 할 수 있도록 게시글 및 댓글 작성 기능을 지원하며. "로그인/마이페이지" 텝에서는 회원 가입 및 카카오톡 계정연동을 지원합니다.'},
    {role:'assistant',content:'코드랩 쳇봇입니다.\n무엇을 도와드릴까요?'}
  ]);

  
  ////////////////////// 클릭하면 읽어주기 기능
  const handleSpeak = (text) => {
    const cutIndex = text.indexOf('\n토큰 사용량:');
    if (cutIndex > -1) {
        text= text.slice(0, cutIndex).trim()
    }

    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
};

  ////////////////////// 음성인식 기능 관련
  const textAreaRef = React.createRef(); // 커서 추적을 위함
  const [getChatbotInput, setChatbotInput] = useState('');
  // 음성 인식 객체 생성 및 설정
  let isrecording = false
  const recognition = new window.webkitSpeechRecognition || window.SpeechRecognition();
  recognition.continuous = true; // 연속적인 결과를 반환하도록 설정  
  recognition.lang = 'ko-KR'; // 사용자의 언어 설정
  
  const handleRecordBtn =()=>{
    if(!isrecording){
      recognition.start();
      isrecording = true
      document.getElementById('recognition').innerText = '녹음중지'
      document.getElementById('recognition').classList.add('isrecording')
    }else{
      recognition.stop();
      isrecording =false
      document.getElementById('recognition').innerText = '녹음시작'
      document.getElementById('recognition').classList.remove('isrecording')
    }
  }
  recognition.onstart = function() {
    console.log("음성 인식이 시작되었습니다.");
  };
  recognition.onend = function() {
    console.log("음성 인식 서비스가 종료되었습니다.");
  }; 
  recognition.onerror = function(event) {
    console.error("음성 인식 에러 발생:", event.error);
  };
  recognition.onresult = function(event) {
    var transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
    }
    console.log(`인식된 내용 추가 : ${transcript}`)
    insertAtCursor(transcript);
  };
  
  const insertAtCursor = (text) => {
    const chatbotInput = getChatbotInput
    const textarea = textAreaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = chatbotInput.substring(0, start);
    const after = chatbotInput.substring(end, chatbotInput.length);
  
    setChatbotInput(before + text + after); // 새로운 텍스트 삽입 후 상태 업데이트
    // 커서 위치 업데이트
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + text.length;
      textarea.focus();
    }, 0);
  };




  ////////////////////
  const toggleChatbot = async() => {
    setIsChatbotOpen(!isChatbotOpen);
  };
  const handleInputChange = (e)=>{
    setChatbotInput(e.target.value);
  }

  const sendMessage = async ()=>{  
    // 내용 안쓰고 전송하면 요청 안보내기
    if(getChatbotInput.trim()===''){
      return null
    }
    
    // 입력한 내용 받아오기  
    const userText = getChatbotInput
    setChatbotInput('')

    // 일단 화면에 내용을 표시하기
    setMessages(data=>{
      return [...data,
        {role:'user',content:userText},
        {role:'assistant',content:'GPT 응답 대기중...'}
      ];
    });    
    
  // Flask 서버에 사용자 메시지 전송
  try {
    // 요청 보내기 전에 토큰 사용량 빼기
    const modifiedMessages = getMessages.map(message => {
        if (message.role === 'assistant') {
            const cutIndex = message.content.indexOf('\n토큰 사용량:');
            if (cutIndex > -1) {
                return { ...message, content: message.content.slice(0, cutIndex).trim() };
            }
        }
        return message;
    });

    const response = await axios.post(`${flaskBaseURL}/getGPTMessage`, {
        messages: modifiedMessages
    });

    // 챗봇 응답을 메시지 목록에 추가
    setTotalCost(x=>x+parseFloat(response.data.cost.replace('$','')))

    setMessages(prevMessages => [
        ...prevMessages.slice(0, -1), // 마지막 메시지인 '응답 대기중...'을 제거
        { role: 'assistant', 
          content: `${response.data.message} 
\n토큰 사용량:
prompt_tokens:${response.data.prompt_tokens}
completion_tokens:${response.data.completion_tokens}
total_tokens:${response.data.total_tokens}
cost:${response.data.cost}` 
        }
    ]);
  } catch (error) {
      console.error('오류:', error);
  }

}

 // 메시지 목록이 변경될 때 스크롤을 맨 아래로 이동
 useEffect(() => {
  const messageContainer = document.getElementById('chatMessageContainer');
  if (messageContainer) {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }

  console.log(`cost : ${getTotalCost}`)
}, [getMessages]);  // getMessages 배열이 변경될 때마다 이 effect를 실행


  return (<>

  <div key='0' id="chatbotIcon" onClick={toggleChatbot} >Chat</div>

  {isChatbotOpen && (<div key='1'  id="chatbot">
      <div key='0' id="chatTitle">
        <strong>코드랩 쳇봇{getTotalCost? ` (비용: $ ${getTotalCost})`:''}</strong>
        <button id="chatbotClose" onClick={toggleChatbot}>X</button>
      </div>
      
      <div key='1' id="chatMessageContainer">
        <div id='chatMessageList'>
        {getMessages.map((item, index) => {
          if (item.role === 'system') {return <></>;}
          return <pre 
            key={index} 
            className={`message ${item.role}`}
            onClick={() => handleSpeak(item.content)}
            >{item.content}</pre>
        })}
        </div>
      </div>

    <div key='2' id="chatInputContainer">
      <button key='1' id='recognition' className='recognition' onClick={handleRecordBtn}>녹음시작</button>
      <textarea 
        ref={textAreaRef}
        id="chatInput" 
        placeholder="메시지를 입력하세요..." 
        value={getChatbotInput}
        onChange={handleInputChange}
      />
      <button key='2' id="chatSendBtn" onClick={sendMessage}>전송</button>
    </div>
</div>)}

</>);

}

export default Chatbot;
