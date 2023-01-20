import { Http, HttpClient, HttpError } from '@/data/protocols'
import { LoadMovieCast } from '@/domain/usecases'

export class RemoteLoadMovieCast implements LoadMovieCast {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadMovieCast.Model>
  ) {}

  async load(): Promise<LoadMovieCast.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    if (httpResponse.statusCode !== Http.StatusCode.ok)
      throw new HttpError(this.url, httpResponse)

    return httpResponse.body!
  }
}
