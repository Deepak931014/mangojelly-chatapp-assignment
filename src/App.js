import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ textAlign: 'center', padding: '20px' }}>
        <img
          src="https://themangojelly.com/images/logo/logo-light.svg"
          alt="Chat Logo"
          style={{ 
            width: '100%', 
            maxWidth: '300px', 
            height: 'auto', 
          }}
        />
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
        <ChatWindow />
      </Box>
      <MessageInput />
    </Container>
  );
};

export default App;
