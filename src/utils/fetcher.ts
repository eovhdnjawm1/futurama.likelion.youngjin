import axios from 'axios';

// export 빼내기
export const fetcher = (url: string) => axios.get(url).then(res => res.data);