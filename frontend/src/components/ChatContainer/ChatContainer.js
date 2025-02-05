import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import MessageInput from "../MessageInput/MessageInput";
import ChatBubble from "../ChatBubble/ChatBubble";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  
  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, fromUser: true }]);
    // Call API to fetch response here
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Hi, I am an AI for AI tools
      </Typography>
      <Box>
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.text} isUser={msg.fromUser} />
        ))}
      </Box>
      <MessageInput onSend={handleSendMessage} />
    </Container>
  );
};

export default ChatContainer;
