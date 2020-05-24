import axios from 'axios';

class Api {
  constructor() {
    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.timeout = 4000;
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
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
}


export default new Api();
