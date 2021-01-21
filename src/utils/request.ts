/* eslint-disable @typescript-eslint/no-explicit-any */

// 简单版 axios 封装
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'
import { ResultEnum } from '/@/enums/httpEnum'

export const getAuthorization = () => {
  let str = ''
  if (window.localStorage.getItem('TOKEN')) {
    str = `${JSON.parse(window.localStorage.getItem('TOKEN') || '').token}`
  }
  return str
}

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 60000, // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error: { msg: string }) => {
  message.error(error.msg)
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.Authorization = getAuthorization()
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse<any>> => {
  const { data } = response

  if (data.code !== ResultEnum.SUCCESS) {
    const title = '请求失败'
    message.error(title)
    if (data.code === ResultEnum.VERIFICATION_FAILED) {
        console.log('您还未登录')
    }
    return Promise.reject(new Error(data.msg || 'Error'))
  }
  return  Promise.resolve(data)
}, errorHandler)

export default request
