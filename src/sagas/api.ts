import axios from 'axios';
import store from '../store/index';
import { signOut } from '../components/admin/auth/actions';

class Api {
  constructor() {
    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.timeout = 5000;
    const token = localStorage.getItem('camisola10-u-token');
    if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const { status } = error.response;
        if (status === 401 || status === 403) {
          await store.dispatch(signOut());
          localStorage.removeItem('camisola10-u-token');
        }
        return Promise.reject(error);
      },
    );
  }

  get(url: string, config?: any) {
    return axios.get(url, config);
  }

  post(url: string, data: any) {
    return axios.post(url, data);
  }

  put(url:string, data:any) {
    return axios.put(url, data);
  }

  delete(url:string, data?: any) {
    if (data) return axios.delete(url, { data });
    return axios.delete(url);
  }

  setAuth(token: String) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}


export default new Api();
