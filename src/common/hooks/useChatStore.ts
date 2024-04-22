import React from 'react';
import { create } from 'zustand';
import { genKey } from '@/common/utils/keyGen';

export interface ChatRecordProps {
  role?: bubbleType;
  children?: React.ReactNode;
  renderFunction?: (children: React.ReactNode) => React.ReactNode;
}
export type fileInfoType = {
  url: string,
  status: 'success' | 'progressing' | 'fail'
}
export type inputType = {
  text: string,
  files?: fileInfoType[]
}
export type ChatHistoryItemType = {
  date: string;
  title: string;
  id: string
};

export type HistoryByDateType = {
  [key: string]: ChatHistoryItemType[];
};

export type bubbleType = 'robot' | 'user';
interface ChatStore {
  chatHistories: ChatHistoryItemType[]
  chatRecords: ChatRecordProps[],
  inputs: inputType,
  currentSelect: string,
  addNewHistory: (title:string) => void,
  userSendMessage: () => void,
  setText: (text: string) => void,
  refreshChatRecords: (id?: string) => void,
  setCurrentSelect: (id: string) => void,
  setPlugins: (name: string, res: string) => void
}
export const useChat = create<ChatStore>((set) => ({
  inputs: {
    text: '',
    files: [{
      url: 'https://s2.loli.net/2024/04/18/eo6hWcET7H5BGA1.webp',
      status: 'success'
    }, {
      url: 'https://s2.loli.net/2024/04/18/eo6hWcET7H5BGA1.webp',
      status: 'progressing'
    }]
  },
  chatHistories: [{
    date: '2024/04/12',
    title: 'mock1',
    id: '1'
  }],
  chatRecords: [{
    role: 'user',
    children: 'test1'
  }],
  currentSelect: '1',
  setCurrentSelect: (id) => set((state) => {
    id !== state.currentSelect && state.refreshChatRecords(id)
    return {currentSelect: id}
  }),
  refreshChatRecords: (id) => set((state) => {
    console.log(id || state.currentSelect);
    return {chatRecords: state.chatRecords}
  }),
  setText: (text) => set((state) => ({inputs: {...state.inputs, text}})),
  setPlugins: (name,res) => set((state) => ({inputs: {...state.inputs, [name]: res}})),
  addNewHistory: (title) => set((state) => {
    let id = String(genKey.next().value)
    const date = new Date().toLocaleDateString()
    return {chatHistories: state.chatHistories.concat({id, date, title}) }
  }),
  userSendMessage: () => set((state) => ({chatRecords: state.chatRecords.concat({children: state.inputs.text, role:'user'})}))
}));
