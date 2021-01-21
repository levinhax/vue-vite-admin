import request from '../utils/request'

/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string
  password: string
}

// 用户登录测试
export function loginApi(params: LoginParams) {
  return request({
    url: '/api/user/login',
    method: 'get',
    params,
  })
}
