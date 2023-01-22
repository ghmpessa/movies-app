import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadMovieImages } from '@/data/usecases/movies'
import { LoadMovieImages } from '@/domain/usecases'

export const makeRemoteLoadMovieImages = (id: string): LoadMovieImages =>
  new RemoteLoadMovieImages(
    makeApiUrl(`/movie/${id}/images`),
    makeAxiosHttpClient()
  )
