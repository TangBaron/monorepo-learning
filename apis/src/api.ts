import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  headers: {
    'content-type': 'application/json'
  }
})

// Add a request interceptor
api.interceptors.request.use((config) => {
  // Do something before request is sent
  // 如果用的jwt, 这里可能会写token
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // 调试数据
  console.log('res:', response);
  if (response.status !== 200) {
    Promise.reject(response);
  }
  return response;
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // 这里可能显示一个全局的错误
  console.log('err:', error);
  return Promise.reject(error);
});

export default api;


