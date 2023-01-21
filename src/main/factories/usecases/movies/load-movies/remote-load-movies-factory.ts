import { RemoteLoadMovies } from '@/data/usecases/movies'
import { LoadMovies } from '@/domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteLoadMovies = (): LoadMovies =>
  new RemoteLoadMovies(
    makeApiUrl('/trending/movie/week'),
    makeAxiosHttpClient()
  )
