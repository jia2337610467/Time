import request from '@/utils/https'

export const getList = (params: any) =>
    request({
        url:'/',
        method: 'get',
        params
    })