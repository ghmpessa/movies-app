import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadRatedMovies } from '@/data/usecases/rating'
import { LoadRatedMovies } from '@/domain/usecases'

export const makeRemoteLoadRatedMovies = (id: string): LoadRatedMovies =>
  new RemoteLoadRatedMovies(
    makeApiUrl(`/account/${id}/rated/movies`),
    makeAxiosHttpClient()
  )
