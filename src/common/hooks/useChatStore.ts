import { genKey } from '@/common/utils/keyGen';
import React from 'react';
import { create } from 'zustand';

export interface ChatRecordProps {
  role?: bubbleType;
  children?: string;
  additionalElem?: React.ReactNode;
  renderFunction?: (
    children: string,
    additionalElem?: React.ReactNode
  ) => React.ReactNode;
}
export type fileInfoType = {
  url: string;
  status: 'success' | 'progressing' | 'fail';
};
export type inputType = {
  text: string;
  files?: fileInfoType[];
};
export type ChatHistoryItemType = {
  date: string;
  title: string;
  id: string;
};

export type HistoryByDateType = {
  [key: string]: ChatHistoryItemType[];
};

export type bubbleType = 'robot' | 'user';
interface ChatStore {
  chatHistories: ChatHistoryItemType[];
  chatRecords: ChatRecordProps[];
  currentSelect: string;
  addNewHistory: (title: string) => void;
  sendMessage: (role: bubbleType, text: string) => void;
  refreshChatRecords: (id?: string) => void;
  setCurrentSelect: (id: string) => void;
}
interface ChatInputStore {
  inputs: inputType;
  setText: (text: string) => void;
  setPlugins: (name: string, res: string) => void;
}
export const useChat = create<ChatStore>((set) => ({
  chatHistories: [
    {
      date: '2024/04/12',
      title: 'mock1',
      id: '1',
    },
  ],
  chatRecords: [
    {
      role: 'robot',
      children: 'test1',
    },
  ],
  currentSelect: '1',
  setCurrentSelect: (id) =>
    set((state) => {
      id !== state.currentSelect && state.refreshChatRecords(id);
      return { currentSelect: id };
    }),
  refreshChatRecords: (id) =>
    set((state) => {
      console.log(id || state.currentSelect);
      return { chatRecords: state.chatRecords };
    }),
  addNewHistory: (title) =>
    set((state) => {
      let id = String(genKey.next().value);
      const date = new Date().toLocaleDateString();
      state.setCurrentSelect(id);
      return {
        chatHistories: [{ id, date, title }].concat(state.chatHistories),
      };
    }),
  sendMessage: (role, text) =>
    set((state) => ({
      chatRecords: state.chatRecords.concat({
        children: text,
        role: role,
      }),
    })),
}));

export const useChatInput = create<ChatInputStore>((set) => ({
  inputs: {
    text: '',
    files: [
      {
        url: 'https://s2.loli.net/2024/04/18/eo6hWcET7H5BGA1.webp',
        status: 'success',
      },
      {
        url: 'https://s2.loli.net/2024/04/18/eo6hWcET7H5BGA1.webp',
        status: 'progressing',
      },
    ],
  },
  setText: (text) => set((state) => ({ inputs: { ...state.inputs, text } })),
  setPlugins: (name, res) =>
    set((state) => ({ inputs: { ...state.inputs, [name]: res } })),
}));
