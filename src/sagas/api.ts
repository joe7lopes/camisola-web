import axios from 'axios';

class Api {
  constructor() {
    axios.defaults.headers['Content-Type'] = 'application/json';
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
