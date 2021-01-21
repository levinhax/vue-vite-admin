import { request } from '/@/utils/http/axios'
import { ErrorMessageMode } from '/@/utils/http/axios/types'

/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string
  password: string
}

export interface RoleInfo {
  roleName: string
  value: string
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number
  token: string
  role: RoleInfo
}

/**
 * @description: user login api test
 */
export function testApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return request.request<LoginResultModel>(
    {
      url: '/api/user/login',
      // url: '/users/defunkt', // GitHub接口
      method: 'get',
      params,
    },
    {
      errorMessageMode: mode,
    }
  )
}
