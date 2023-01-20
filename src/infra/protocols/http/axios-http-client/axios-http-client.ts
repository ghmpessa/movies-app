import { HttpRequest, HttpResponse } from '@/data/protocols/http'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    const { url, method, body, headers, params } = data
    let axiosResponse: AxiosResponse

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
