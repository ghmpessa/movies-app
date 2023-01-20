import { Http, HttpClient, HttpError } from '@/data/protocols'
import { DeleteRating } from '@/domain/usecases'

export class RemoteDeleteRating implements DeleteRating {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<DeleteRating.Model>
  ) {}

  async delete(): Promise<DeleteRating.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'delete',
    })

    if (httpResponse.statusCode !== Http.StatusCode.ok)
      throw new HttpError(this.url, httpResponse)

    return httpResponse.body!
  }
}
