import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadWatchList } from '@/data/usecases/watch-list'
import { LoadWatchList } from '@/domain/usecases'

export const makeRemoteLoadWatchList = (id: string): LoadWatchList =>
  new RemoteLoadWatchList(
    makeApiUrl(`/account/${id}/watchlist/movies`),
    makeAxiosHttpClient()
  )
