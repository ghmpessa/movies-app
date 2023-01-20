import { Http, HttpClient, HttpError } from '@/data/protocols'
import { RateMovie } from '@/domain/usecases'

export class RemoteRateMovie implements RateMovie {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<void>
  ) {}

  async rate(params: RateMovie.Params): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    })

    if (httpResponse.statusCode !== Http.StatusCode.created)
      throw new HttpError(this.url, httpResponse)

    return
  }
}
