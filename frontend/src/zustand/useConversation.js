// import {create} from 'zustand'

// const useConversation = create((set) => ({
//   selectedConversations: null,
//   setSelectedConversations: (selectedConversations) => set({ selectedConversations }),
//   messages:[],
//     setMessages:(messages)=>set({messages}),

// }))

// export default useConversation;

import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null, // Singular
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }), // Singular
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;