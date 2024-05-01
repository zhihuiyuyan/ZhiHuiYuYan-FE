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

// export const getFilterList = async <T>() => {
//   return await axios.get()
// }