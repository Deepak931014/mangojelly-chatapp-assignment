import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button } from '@mui/material';
import { sendMessage } from '../features/chatSlice';  

const MessageInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (input.trim()) {
      dispatch(sendMessage(input));
      setInput('');
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        gap: '10px',
        padding: '10px',
        '@media (max-width: 600px)': {
          flexDirection: 'column', 
          gap: '5px',
        }
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        sx={{
          '@media (max-width: 600px)': {
            width: '100%',
          }
        }}
      />
      <Button 
        variant="contained" 
        onClick={handleSendMessage}
        sx={{ 
          padding: '10px 20px', 
          '@media (max-width: 600px)': {
            width: '100%', 
          }
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
