import React from "react";
import { Box, Typography } from "@mui/material";

const ChatBubble = ({ message, isUser }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "10px",
      }}
    >
      <Typography
        variant="body1"
        style={{
          backgroundColor: isUser ? "#3f51b5" : "#e0e0e0",
          color: isUser ? "white" : "black",
          padding: "10px",
          borderRadius: "20px",
          maxWidth: "70%",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default ChatBubble;
