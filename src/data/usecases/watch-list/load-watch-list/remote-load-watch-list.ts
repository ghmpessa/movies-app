import { Http, HttpClient, HttpError } from '@/data/protocols'
import { LoadWatchList } from '@/domain/usecases'

export class RemoteLoadWatchList implements LoadWatchList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadWatchList.Model>
  ) {}

  async load(params: LoadWatchList.Params): Promise<LoadWatchList.Model> {
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
