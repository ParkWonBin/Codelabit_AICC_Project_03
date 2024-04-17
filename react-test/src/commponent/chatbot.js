import React, { useState } from 'react';

function Chatbot() { // Changed the component name to start with an uppercase letter

  const [isChatbotOpen, setIsChatbotOpen] = useState(false); 

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen); 
  };

  return (
    <div className="chatbot-button-container"> 
        <button onClick={toggleChatbot}>챗봇</button>
    </div>
  );
}

export default Chatbot; // Updated the export name to match the component name
