import { Http, HttpClient, HttpError } from '@/data/protocols'
import { RequestToken } from '@/domain/usecases'

export class RemoteRequestToken implements RequestToken {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RequestToken.Model>
  ) {}

  async request(): Promise<RequestToken.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    if (httpResponse.statusCode !== Http.StatusCode.ok)
      throw new HttpError(this.url, httpResponse)

    return httpResponse.body!
  }
}
