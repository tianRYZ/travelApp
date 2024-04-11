// // 
// import axios from 'axios';
// import { BASE_URL, TIMEOUT } from './config'
// class HYTRequest {

//   constructor(baseURL, timeout = 10000) {
//     this.instance = axios.create({
//       baseURL,
//       timeout
//     })
//   }

//   request(config) {
//     return new Promise((reslove, reject) => {
//       this.instance.request(config).then(res => {
//         reslove(res.data);
//       }).catch(err => {
//         reject(err);
//       })
//     })
//   }

//   get(config) {
//     return this.request({ ...config, method: "get" })
//   }

//   post(config) {
//     return this.request({ ...config, method: "post" })
//   }
// }

// // const baseURL = 'http://123.207.32.32:8000';
// export default new HYTRequest(BASE_URL, TIMEOUT)

import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config'
import usemainStore from '@/store/modules/main'

const mainStore = usemainStore();
const createRequestInstance = (baseURL, timeout) => {
  const instance = axios.create({
    baseURL, // 设置基本URL
    timeout, // 设置请求超时时间
  });

  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前可以进行一些处理，如添加请求头等
      // config.headers['Authorization'] = 'Bearer token';
      mainStore.isLoading = true;
      return config;
    },
    (error) => {
      // 处理请求错误
      return Promise.reject(error);
    }
  );

  // 响应拦截器
  instance.interceptors.response.use(
    (response) => {
      // 在这里对响应数据进行处理
      mainStore.isLoading = false;
      return response.data;
    },
    (error) => {
      // 处理响应错误
      return Promise.reject(error);
    }
  );

  return instance;
};

// 动态传入BASE_URL和TIMEOUT
// const baseURL = 'https://api.example.com';
// const timeout = 5000;

const request = createRequestInstance(BASE_URL, TIMEOUT);

export default request;

