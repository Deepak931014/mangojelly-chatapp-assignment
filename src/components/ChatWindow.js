import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, List, ListItem } from '@mui/material';
import Message from './Message';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  return (
    <Box 
      id="chat-window" 
      sx={{
        height: '485px', 
        overflowY: 'auto', 
        padding: '10px', 
        border: '1px solid #ccc', 
        borderRadius: '10px',
        backgroundColor: '#f5f5f5',
        '@media (max-width: 600px)': {
          height: '300px', 
        }
      }}
    >
      <List>
        {messages.map((message, index) => (
          <ListItem key={index} sx={{ padding: '5px' }}>
            <Message message={message} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatWindow;
