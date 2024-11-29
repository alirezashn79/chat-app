import { Message, User } from "@/types";
import { create } from "zustand";

interface ConversationStoreType {
  selectedConversation: User | null;
  setSelectedConversation: (selectedConversation: User | null) => void;
  //
  messages: Array<Message>;
  setMessages: (messages: Array<Message>) => void;
  //
  users: Array<User>;
  setUsers: (users: Array<User>) => void;
  //
  notifications: Array<string>;
  setNotifications: (notifications: Array<string>) => void;
}

const useConversation = create<ConversationStoreType>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: User | null) =>
    set({ selectedConversation }),
  //
  messages: [],
  setMessages: (messages: Array<Message>) => set({ messages }),
  //
  users: [],
  setUsers: (users: Array<User>) => set({ users }),
  //
  notifications: [],
  setNotifications: (notifications: Array<string>) => set({ notifications }),
}));

export default useConversation;
