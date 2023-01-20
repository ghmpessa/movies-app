import { Http, HttpClient } from '@/data/protocols'
import { HttpError } from '@/data/protocols'
import { AddToWatchList } from '@/domain/usecases'

export class RemoteAddToWatchList implements AddToWatchList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async add(params: AddToWatchList.Params): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      body: params,
      params: params.session_id,
    })

    if (httpResponse.statusCode !== Http.StatusCode.created) {
      throw new HttpError(this.url, httpResponse)
    }

    return
  }
}
