import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    const API_KEY = import.meta.env.VITE_API_KEY
    const { url: path, method, body, headers, params } = data
    let axiosResponse: AxiosResponse

    const url = `${path}?${API_KEY}`

    try {
      axiosResponse = await axios.request({
        url,
        method,
        data: body,
        headers,
        params,
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
