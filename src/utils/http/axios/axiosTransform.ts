/**
 * 数据处理类，可以根据项目自行配置
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestOptions, Result } from './types'

export abstract class AxiosTransform {
  /**
   * @description: 请求之前处理配置
   * @description: Process configuration before request
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig

  /**
   * @description: 请求成功处理
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformRequestData?: (res: AxiosResponse<Result>, options: RequestOptions) => any

  /**
   * @description: 请求失败处理
   */
  requestCatch?: (e: Error) => Promise<unknown>

  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig

  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<unknown>) => AxiosResponse<unknown>

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void
}
