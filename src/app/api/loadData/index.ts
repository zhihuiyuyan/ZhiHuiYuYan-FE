import axios from 'axios';
import { listType } from '@/common/hooks/useInfo';
// const rootUrl = 'http://121.41.170.32:8090';
const rootUrl = 'http://localhost:8087'
export const getData = async <T>(props: listType<T>) => {
  return await axios.post(`${rootUrl}/info`, {
    ...props
  }).then((res) => res.data).catch((error) => {
    console.error('There was an error in getting data!', error);
  })
}

export const getFilterList = async (name: 'scholar' | 'paper', filter_names: string[]) => {
  return await axios.post(`${rootUrl}/filter`, {
    name,
    filter_names
  }).then((res) => res.data.data).catch((error) => {
    console.error('There was an error in getting filtered list!', error);
  })
}

export const getPapers = async (id: number) => {
  return axios.get(`${rootUrl}/filter?id=${id}`).then(res => res.data.data).catch((error) => {
    console.error('There was an error in getting papers!', error);
  })
}