import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadMovies } from '@/data/usecases/movies'
import { LoadMovies } from '@/domain/usecases'

export const makeRemoteLoadMovies = (path: string): LoadMovies =>
  new RemoteLoadMovies(makeApiUrl(path!), makeAxiosHttpClient())
