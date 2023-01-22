import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadMovies } from '@/data/usecases/movies'
import { LoadMovies } from '@/domain/usecases'

export const makeRemoteLoadMovies = (): LoadMovies =>
  new RemoteLoadMovies(makeApiUrl('/discover/movie'), makeAxiosHttpClient())
