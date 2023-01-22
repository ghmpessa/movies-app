import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadMovies } from '@/data/usecases/movies'
import { LoadMovies } from '@/domain/usecases'

export const makeRemoteLoadPopularMovies = (): LoadMovies =>
  new RemoteLoadMovies(makeApiUrl('/movie/popular'), makeAxiosHttpClient())
