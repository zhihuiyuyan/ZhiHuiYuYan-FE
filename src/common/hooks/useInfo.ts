import axios from 'axios';
import { create } from 'zustand';

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

interface InfoStore<T> {
  allInfo: T[];
  filteredList: T[];
  activatedChoice: { [name: string]: [] };
  filterChoiceList: { [name: string]: any[] };
  setAllInfo: (list: any[]) => void;
  setSort: (name: keyof T) => void;
  setFilterList: (name: keyof T) => void;
  setFilterChoice: (name: keyof T, value: any) => void;
  setFilteredList: (name: keyof T, value: any) => void;
}

const createStore = <T>() =>
  create<InfoStore<T>>((set) => ({
    setAllInfo: (list: T[]) => set({ allInfo: list, filteredList: list }),
    setSort: (name) =>
      set((state) => ({
        filteredList: state.filteredList.sort(
          (a, b) => Number(b[name]) - Number(a[name] as number)
        ),
      })),
    setFilterChoice: (name, value) =>
      set((state) => ({
        activatedChoice: { ...state.activatedChoice, [name]: value },
      })),
    setFilterList: (name) =>
      set((state) => ({
        filterChoiceList: {
          ...state.filterChoiceList,
          [name]: Array.from(new Set(state.allInfo.map((info) => info[name]))),
        },
      })),
    setFilteredList: (name, value) =>
      set((state) => ({
        filteredList: Array.from(
          new Set(state.allInfo.filter((item) => item[name] === value))
        ),
      })),
    allInfo: [],
    activatedChoice: {},
    filteredList: [],
    filterChoiceList: {},
  }));

export const usePersonInfo = createStore<ScholarItem>();
export const usePaperInfo = createStore<PaperItem>();
export const expertInfo = axios
  .get('http://localhost:3000/expert_info.json')
  .then((res) => JSON.parse(res.request.response));
export const paperInfo = axios
  .get('http://localhost:3000/article_info.json')
  .then((res) => JSON.parse(res.request.response));
