import { Http, HttpClient, HttpError } from '@/data/protocols'
import { CreateSession } from '@/domain/usecases'

export class RemoteCreateSession implements CreateSession {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<CreateSession.Model>
  ) {}

  async create(params: CreateSession.Params): Promise<CreateSession.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    })

    if (httpResponse.statusCode !== Http.StatusCode.ok)
      throw new HttpError(this.url, httpResponse)

    return httpResponse.body!
  }
}
