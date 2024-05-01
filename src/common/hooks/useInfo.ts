import { create } from 'zustand';
import axios from 'axios';
import { getData } from '@/app/api/loadData';

export type ScholarItem = {
  expert_id: number;
  expert_img: string;
  expert_name: string;
  research_direction: string;
  work_organization: string;
  job_title: string;
  citations: number;
  books: number;
  isFollowed: boolean;
  followers: number;
  personal_profile: string;
  paper_num: number;
};

export type PaperItem = {
  article_id: number;
  article_name: string;
  article_author: string;
  article_keywords: string;
  publish_time: string;
  article_source: string;
  article_url: string;
  abstract: string;
  topics: string;
  belong_db: string;
  download_count: number;
  isCollected: boolean;
  followers: number;
};

export type listType<T>  = {
  name: 'scholar' | 'paper',
  sort?: keyof T,
  filters?: { [key in keyof T]: string[] },
  page: number,
  pageSize?: number
}

interface InfoStore<T> {
  filteredList: T[];
  curPage: number;
  totalNum: number;
  setCurPage: (index: number) => void;
  activatedChoice: { [name: string]: [] };
  filterChoiceList: { [name: string]: any[] };
  setFilterChoice: (name: keyof T, value: any) => void;
  setFilteredList: (props: listType<T>) => void;
}


const createStore = <T>() =>
  create<InfoStore<T>>((set) => ({
    setCurPage: (index) => set({curPage: index}),
    setFilterChoice: (name, value) =>
      set((state) => ({
        activatedChoice: { ...state.activatedChoice, [name]: value },
      })),
    setFilteredList: async (props) => {
      let data = await getData<T>(props)
      set({filteredList: data.items, totalNum: data.totalItems})
    },
    curPage: 1,
    totalNum: 1,
    activatedChoice: {},
    filteredList: [],
    filterChoiceList: {},
  }));
export const usePersonInfo = createStore<ScholarItem>();
export const usePaperInfo = createStore<PaperItem>();
