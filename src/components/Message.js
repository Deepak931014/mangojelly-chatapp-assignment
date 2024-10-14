import React from 'react';
import { Box, Typography } from '@mui/material';

const Message = ({ message }) => {
  const isSentByCurrentUser = message.user === 'You'; 

  return (
    <Box 
      sx={{
        textAlign: isSentByCurrentUser ? 'right' : 'left',
        marginBottom: '10px',
      }}
    >
      <Typography 
        variant="body1" 
        sx={{
          display: 'inline-block',
          padding: '10px 15px',
          backgroundColor: isSentByCurrentUser ? '#1976d2' : '#4caf50',  
          color: '#fff',
          borderRadius: '15px',
          maxWidth: '70%',
          wordWrap: 'break-word',
          '@media (max-width: 600px)': {
            fontSize: '14px', 
          }
        }}
      >
        {message.text}
      </Typography>
      <Typography 
        variant="caption" 
        display="block" 
        sx={{ marginTop: '5px', color: '#666' }}
      >
        {message.timestamp}
      </Typography>
    </Box>
  );
};

export default Message;
