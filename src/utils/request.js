import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'
// let baseURL = 'http://localhost:3000'
// if (process.env.NODE_ENV === 'prod') {
// 	baseURL = 'http://xxxxx.com'
// }
// create an axios instance
// axios.defaults.withCredentials = true
const service = axios.create({
	baseURL: 'http://localhost:3000', // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000, // request timeout
	// withCredentials: true,
	// crossDomin: true,
})

// request interceptor
axios.interceptors.request.use(
	function(config) {
		// 在发送请求之前做些什么
		if (store.getters.token) {
			// let each request carry token
			// ['X-Token'] is a custom headers key
			// please modify it according to the actual situation
			config.headers['X-Token'] = getToken()
		}
		return config
	},
	function(error) {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

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
	(response) => {
		return response.data

		// if the custom code is not 20000, it is judged as an error.

		// 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
	}
)

export default service
