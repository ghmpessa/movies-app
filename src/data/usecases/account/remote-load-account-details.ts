import { Http, HttpClient, HttpError } from '@/data/protocols'
import { LoadAccountDetails } from '@/domain/usecases'

export class RemoteLoadAccountDetails implements LoadAccountDetails {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadAccountDetails.Model>
  ) {}

  async load(
    params: LoadAccountDetails.Params
  ): Promise<LoadAccountDetails.Model> {
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
