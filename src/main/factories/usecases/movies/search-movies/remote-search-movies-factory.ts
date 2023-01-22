import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteSearchMovies } from '@/data/usecases/movies'
import { SearchMovies } from '@/domain/usecases'

export const makeRemoteSearchMovies = (): SearchMovies =>
  new RemoteSearchMovies(makeApiUrl('/search/movie'), makeAxiosHttpClient())
