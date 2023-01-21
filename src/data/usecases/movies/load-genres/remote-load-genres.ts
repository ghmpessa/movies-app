import { Http, HttpClient, HttpError } from '@/data/protocols'
import { LoadGenres } from '@/domain/usecases'

export class RemoteLoadGenres implements LoadGenres {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadGenres.Model>
  ) {}

  async load(): Promise<LoadGenres.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    if (httpResponse.statusCode !== Http.StatusCode.ok)
      throw new HttpError(this.url, httpResponse)

    return httpResponse.body!
  }
}
