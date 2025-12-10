// useConversation.js
import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
  messages: [], // ✅ make sure this starts as []
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
