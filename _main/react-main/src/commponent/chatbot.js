import React, { useState } from 'react';

function Chatbot() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-button-container">
        <button onClick={toggleChatbot}>챗봇</button>
      </div>

      {isChatbotOpen && (
        <div className="chatbot-chat-container" style={chatbotStyle}>
  
          <p>챗봇</p>
        </div>
      )}
    </div>
  );
}

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

export default Chatbot;
