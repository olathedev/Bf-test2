// src/messageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: number;
  content: string;
}

const initialState: Message[] = [];

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.push(action.payload);
    },
  },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
