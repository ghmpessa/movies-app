import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadMovieCast } from '@/data/usecases/movies'
import { LoadMovieCast } from '@/domain/usecases'

export const makeRemoteLoadMovieCast = (id: string): LoadMovieCast =>
  new RemoteLoadMovieCast(
    makeApiUrl(`/movie/${id}/credits`),
    makeAxiosHttpClient()
  )
