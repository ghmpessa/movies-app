import { Http, HttpClient, HttpError } from '@/data/protocols'
import { LoadMovieDetails } from '@/domain/usecases'

export class RemoteLoadMovieDetails implements LoadMovieDetails {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadMovieDetails.Model>
  ) {}

  async load(): Promise<LoadMovieDetails.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    if (httpResponse.statusCode !== Http.StatusCode.ok)
      throw new HttpError(this.url, httpResponse)

    return httpResponse.body!
  }
}
