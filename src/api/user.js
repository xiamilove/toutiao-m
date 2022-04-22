import request from '@/utils/request'

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