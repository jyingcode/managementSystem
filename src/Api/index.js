import request from '../utils/request'

export function getList(data) {
    return request({
        url: '/getList',
        method: 'post',
        data
    })
}


