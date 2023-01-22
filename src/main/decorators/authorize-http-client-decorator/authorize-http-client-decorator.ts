import { HttpClient, Http } from '@/data/protocols'

export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(private readonly httpClient: HttpClient) {}

  async request(data: Http.Request): Promise<Http.Response> {
    Object.assign(data, {
      headers: Object.assign(data.headers || {}, {
        Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
      }),
    })
    const httpResponse = await this.httpClient.request(data)
    return httpResponse
  }
}
