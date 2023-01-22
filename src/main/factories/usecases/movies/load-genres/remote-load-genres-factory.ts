import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadGenres } from '@/data/usecases/movies'
import { LoadGenres } from '@/domain/usecases'

export const makeRemoteLoadGenres = (): LoadGenres =>
  new RemoteLoadGenres(makeApiUrl('/genre/movie/list'), makeAxiosHttpClient())
