import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => setInput(event.target.value);

  const handleSend = async () => {
    if (input.trim()) {
      setIsSending(true);
      await onSend(input);  // Simulate API call
      setInput("");
      setIsSending(false);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !isSending && input.trim()) {
      handleSend();
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <TextField
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyPress} 
        variant="outlined"
        fullWidth
        placeholder="Type your message"
        disabled={isSending}
      />
      <IconButton
        onClick={handleSend}
        disabled={isSending || !input.trim()}
        style={{ marginLeft: "10px" }}
      >
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default MessageInput;
