import { HttpClient, Http } from '@/data/protocols/http'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request(data: Http.Request): Promise<Http.Response> {
    const API_KEY = import.meta.env.VITE_API_KEY
    const { url, method, body, headers, params } = data
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.request({
        url,
        method,
        data: body,
        headers,
        params: {
          api_key: API_KEY,
          ...params,
        },
      })
    } catch (error: any) {
      axiosResponse = error.response
    }

    return {
      body: axiosResponse.data,
      statusCode: axiosResponse.status,
    }
  }
}
