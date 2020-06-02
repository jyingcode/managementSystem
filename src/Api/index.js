import request from '../utils/request'

export function getList(data) {
	return request({
		url: '/getList',
		method: 'get',
		params: data,
	})
}

export function submit(data) {
	return request({
		url: '/addOrder',
		method: 'post',
		data,
	})
}

export function onDelete(data) {
	return request({
		url: '/deleteData',
		method: 'post',
		data,
	})
}

export function modifyData(data) {
	return request({
		url: '/onModifyData',
		method: 'post',
		data,
	})
}
export function LoginPassword(data) {
	return request({
		url: 'login',
		method: 'post',
		data,
	})
}
