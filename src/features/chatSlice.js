import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  currentUser: "You",  
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        user: state.currentUser,
        text: action.payload,
        timestamp: new Date().toLocaleTimeString(),
      });

      // Automated response logic
      const lowercaseMessage = action.payload.toLowerCase();
      
      // Reply for greetings
      if (["hi", "hii", "hello", "hey", "hy"].some(greet => lowercaseMessage.includes(greet))) {
        state.messages.push({
          user: "Bot",
          text: "Hy There",
          timestamp: new Date().toLocaleTimeString(),
        });
      }

      // Reply for "How are you" or "What's up"
      else if (["how are you", "whats up", "what's up", "what,s up"].some(question => lowercaseMessage.includes(question))) {
        state.messages.push({
          user: "Bot",
          text: "I'm Good!",
          timestamp: new Date().toLocaleTimeString(),
        });
      }

      // Reply for "bye"
      else if (lowercaseMessage.includes("bye")) {
        state.messages.push({
          user: "Bot",
          text: "Goodbye! Have a great day!",
          timestamp: new Date().toLocaleTimeString(),
        });
      }

      // Reply for "who made you"
      else if (lowercaseMessage.includes("who made you")) {
        state.messages.push({
          user: "Bot",
          text: "My developer is Deepak Kumar",
          timestamp: new Date().toLocaleTimeString(),
        });
      }

      // Default reply if no condition matches
      else {
        state.messages.push({
          user: "Bot",
          text: "Sorry, I don't understand this text.",
          timestamp: new Date().toLocaleTimeString(),
        });
      }
    },
  },
});

export const { sendMessage } = chatSlice.actions;

export default chatSlice.reducer;
