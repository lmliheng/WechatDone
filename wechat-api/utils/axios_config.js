import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.weixin.qq.com',
  timeout: 10000
});

export {api}