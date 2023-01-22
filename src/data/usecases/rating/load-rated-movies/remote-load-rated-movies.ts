import { Http, HttpClient, HttpError } from '@/data/protocols'
import { LoadRatedMovies } from '@/domain/usecases'

export class RemoteLoadRatedMovies implements LoadRatedMovies {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadRatedMovies.Model>
  ) {}

  async load(params: LoadRatedMovies.Params): Promise<LoadRatedMovies.Model> {
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
