import request from '@/utils/request'
import store from '@/store'
// 登录验证
export const login = data => {
    return request({
        method: 'POST',
        url: '/v1_0/authorizations',
        data: data
    })
}

// 发送验证码
export const getSmsCode = mobile => {
    return request({
        method: 'GET',
        url: `/v1_0/sms/codes/${mobile}`,

    })
}

//获取自己的用户信息
export const getUserInfo = () => {
    return request({
        method: 'GET',
        url: '/v1_0/user'
    })
}

//获取频道信息
export const getUserChannels = () => {
    return request({
        method: 'GET',
        url: '/v1_0/user/channels'
    })
}