import request from '../utils/request'

export function getList(data) {
    return request({
        url: '/getList',
        method: 'get',
        data
    })
}


export function submit(data) {
    return request({
        url: '/addOrder',
        method: 'post',
        data
    })
}


