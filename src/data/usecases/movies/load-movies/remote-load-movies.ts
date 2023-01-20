import { Http, HttpClient, HttpError } from '@/data/protocols'
import { LoadMovies } from '@/domain/usecases'

export class RemoteLoadMovies implements LoadMovies {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadMovies.Model>
  ) {}

  async load(params: LoadMovies.Params): Promise<LoadMovies.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params,
    })

    if (httpResponse.statusCode !== Http.StatusCode.ok)
      throw new HttpError(this.url, httpResponse)

    return httpResponse.body!
  }
}
