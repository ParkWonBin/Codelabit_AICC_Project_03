import React, { useState } from 'react';

function Chatbot() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div className="chatbot-container">
       {!isChatbotOpen && (
      <div className="chatbot-button-container" style={buttonContainerStyle} onClick={toggleChatbot}>
        <span style={buttonTextStyle}>챗봇</span>
      </div>
      )}
      {isChatbotOpen && (
        <div className="chatbot-chat-container" style={chatbotStyle}>
          <p>챗봇</p>
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
  color: '#555'
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
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
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
  color: '#555'
};

export default Chatbot;
