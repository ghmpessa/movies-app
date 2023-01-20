import { Http, HttpClient, HttpError } from '@/data/protocols'
import { DeleteSession } from '@/domain/usecases'

export class RemoteDeleteSession implements DeleteSession {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<DeleteSession.Model>
  ) {}

  async delete(params: DeleteSession.Params): Promise<DeleteSession.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'delete',
      body: params,
    })

    if (httpResponse.statusCode !== Http.StatusCode.ok)
      throw new HttpError(this.url, httpResponse)

    return httpResponse.body!
  }
}
