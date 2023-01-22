import { makeApiUrl } from '@/main/factories/http'
import { RemoteAddToWatchList } from '@/data/usecases/watch-list'
import { AddToWatchList } from '@/domain/usecases'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/decorators'

export const makeRemoteAddToWatchList = (id: number): AddToWatchList =>
  new RemoteAddToWatchList(
    makeApiUrl(`/account/${id}/watchlist`),
    makeAuthorizeHttpClientDecorator()
  )
