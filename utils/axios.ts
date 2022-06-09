import { HttpResponse } from '@/common/interface'

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

class HttpRequest {
  private baseURL: string
  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  getConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  interceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // NProgress.start()
        const key = `${config.url}&${config.method}`

        return config
      },
      (err: AxiosError) => {
        // errorHandle(err)
        return Promise.reject(err)
      }
    )

    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // NProgress.done()

        if (res.status === 200) return Promise.resolve(res.data)
        return Promise.reject(res)
      },
      (err: AxiosError) => {
        // errorHandle(err)
        return Promise.reject(err)
      }
    )
  }

  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> | Promise<HttpResponse> {
    const optins = Object.assign({ method: 'GET', url }, config)
    return this.request(optins)
  }

  post(url: string, data: any): Promise<AxiosResponse> | Promise<HttpResponse> {
    return this.request({ method: 'POST', url, data })
  }
}

const req = new HttpRequest('https://api.valzt.cn')

export default req
