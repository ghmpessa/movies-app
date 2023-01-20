import { Http, HttpClient, HttpError } from '@/data/protocols'
import { LoadMovieImages } from '@/domain/usecases'

export class RemoteLoadMovieImages implements LoadMovieImages {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadMovieImages.Model>
  ) {}

  async load(): Promise<LoadMovieImages.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    if (httpResponse.statusCode !== Http.StatusCode.ok)
      throw new HttpError(this.url, httpResponse)

    return httpResponse.body!
  }
}
