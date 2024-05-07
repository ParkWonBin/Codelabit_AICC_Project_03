import React, { useState, useEffect } from 'react';

function Chatbot() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: '코드랩 쳇봇입니다. 메뉴 번호를 입력해서 메뉴를 선택하세요.' },
  ]);
  const [inputText, setInputText] = useState('');

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleResponse = (userInput) => {
    let response = '';
    if (userInput.includes('교통안내')) {
      response = '교통 안내 메뉴를 선택하셨습니다.';
    } else if (userInput.includes('날씨안내')) {
      response = '날씨 안내 메뉴를 선택하셨습니다.';
    } else {
      response = '주어진 선택지를 입력해주세요. 선택지 목록: 교통안내, 날씨안내';
    }
    setMessages([...messages, { id: messages.length + 1, text: response }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    setMessages([...messages, { id: messages.length + 1, text: inputText, isUser: true }]);
    handleResponse(inputText); // 메시지를 보낼 때마다 응답 처리

    setInputText('');
  };

  useEffect(() => {
    // 데이터를 불러오는 비동기 함수
    const fetchData = async () => {
      try {
        const response = await fetch('URL_HERE'); // URL_HERE에 실제 데이터를 가져올 URL을 입력해주세요.
        const data = await response.json();
        console.log(data); // 불러온 데이터 콘솔에 출력 또는 적절히 활용
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // fetchData 함수 호출

  }, []); // 빈 종속성 배열 추가

  return (
    <div className="chatbot-container">
      {!isChatbotOpen && (
        <div className="chatbot-button-container" style={buttonContainerStyle} onClick={toggleChatbot}>
          <span style={buttonTextStyle}>챗봇</span>
        </div>
      )}
      {isChatbotOpen && (
        <div className="chatbot-chat-container" style={chatbotStyle}>
          <div className="chat-messages-container" style={chatMessagesContainerStyle}>
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.isUser ? 'user' : 'assistant'}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputText}
              onChange={handleChange}
              placeholder="메시지를 입력하세요..."
              style={inputTextStyle}
            />
          </form>
          <button className="close-button" onClick={closeChatbot} style={closeButtonStyle}>X</button>
        </div>
      )}
    </div>
  );
}

const buttonContainerStyle = {
  cursor: 'pointer',
};

const buttonTextStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#555',
};

const chatbotStyle = {
  width: '300px',
  height: '400px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const chatMessagesContainerStyle = {
  height: 'calc(100% - 100px)',
  overflowY: 'auto',
};

const inputTextStyle = {
  width: 'calc(100% - 80px)',
  marginRight: '10px',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '2px',
  right: '-150px',
  left: 'auto',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#555',
};

export default Chatbot;
