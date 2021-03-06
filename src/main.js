import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import { mockXHR } from '../mock'
// mockXHR()

Vue.config.productionTip = false
Vue.use(ElementUI)

// Vue.http.interceptors.push((request, next) => {
// 	request.credentials = true

// 	next()
// })
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
