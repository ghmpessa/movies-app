import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadMovieDetails } from '@/data/usecases/movies'
import { LoadMovieDetails } from '@/domain/usecases'

export const makeRemoteLoadMovieDetails = (id: string): LoadMovieDetails =>
  new RemoteLoadMovieDetails(makeApiUrl(`/movie/${id}`), makeAxiosHttpClient())
