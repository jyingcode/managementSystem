import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:3000', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.error(config)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    return response.data

    // if the custom code is not 20000, it is judged as an error.
    

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      
  }
)

export default service
