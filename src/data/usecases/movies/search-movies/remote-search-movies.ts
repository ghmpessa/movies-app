import { Http, HttpClient, HttpError } from '@/data/protocols'
import { SearchMovies } from '@/domain/usecases'

export class RemoteSearchMovies implements SearchMovies {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<SearchMovies.Model>
  ) {}

  async search(params: SearchMovies.Params): Promise<SearchMovies.Model> {
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
