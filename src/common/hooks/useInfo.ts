import { getData } from '@/app/api/loadData';
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

export type listType<T> = {
  name: 'scholar' | 'paper';
  sort?: keyof T;
  filters?: { [key: string]: string[] };
  page: number;
  pageSize?: number;
};

interface InfoStore<T> {
  filteredList: T[];
  pageSize: number;
  curPage: number;
  totalNum: number;
  sort: keyof T | null;
  setSort: (name: keyof T) => void;
  setCurPage: (index: number) => void;
  filters: { [key: string]: string[] };
  setFilters: (name: keyof T, value: string) => void;
  unsetFilters: (name: keyof T, value: string) => void;
  setFilteredList: (props: listType<T>) => void;
}

const createStore = <T>() =>
  create<InfoStore<T>>((set) => ({
    setCurPage: (index) => set({ curPage: index }),
    setFilters: (name, value) =>
      set((state) => {
        // @ts-ignore
        if (state.filters[name]?.length)
          return {
            filters: {
              ...state.filters,
              [name]: state.filters[name].concat(value),
            },
          };
        return { filters: { ...state.filters, [name]: [value] } };
      }),
    unsetFilters: (name, value) =>
      set((state) => {
        // @ts-ignore
        if (state.filters[name]?.length)
          return {
            filters: {
              ...state.filters,
              [name]: state.filters[name].filter((val) => val !== value),
            },
          };
        return { filters: state.filters };
      }),
    setFilteredList: async (props) => {
      let data = await getData<T>(props);
      set({ filteredList: data.items, totalNum: data.totalItems });
    },
    setSort: (name) => set({ sort: name }),
    sort: null,
    pageSize: 3,
    curPage: 1,
    totalNum: 1,
    activatedChoice: {},
    filteredList: [],
    filters: {},
  }));
export const usePersonInfo = createStore<ScholarItem>();
export const usePaperInfo = createStore<PaperItem>();
