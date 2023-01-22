import { Http, HttpClient } from '@/data/protocols'
import { HttpError } from '@/data/protocols'
import { AddToWatchList } from '@/domain/usecases'

export class RemoteAddToWatchList implements AddToWatchList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<void>
  ) {}

  async add(params: AddToWatchList.Params): Promise<void> {
    const body: Partial<AddToWatchList.Params> = {
      media_id: params.media_id,
      media_type: params.media_type,
      watchlist: params.watchlist,
    }
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body,
      params: params.session_id,
    })

    switch (httpResponse.statusCode) {
      case Http.StatusCode.created:
        return
      case Http.StatusCode.ok:
        return
      default:
        throw new HttpError(this.url, httpResponse)
    }
  }
}
