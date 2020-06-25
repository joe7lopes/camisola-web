import axios from 'axios';
import store from '../store/index';
import { signOut } from '../actions';

const USER_TOKEN = 'camisola10-u-token';
class Api {
  constructor() {
    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.timeout = 4000;
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
    const token = localStorage.getItem(USER_TOKEN);
    if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const { status } = error.response;
        if (status === 401) {
          store.dispatch(signOut());
        }
        return Promise.reject(error);
      },
    );
  }

  get(url: string) {
    return axios.get(url);
  }

  post(url: string, data: any) {
    return axios.post(url, data);
  }

  put(url:string, data:any) {
    return axios.put(url, data);
  }

  setAuth(token: String) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}


export default new Api();
