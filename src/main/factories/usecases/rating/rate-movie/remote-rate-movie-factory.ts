import { makeApiUrl } from '@/main/factories/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/decorators'
import { RemoteRateMovie } from '@/data/usecases/rating'
import { RateMovie } from '@/domain/usecases'

export const makeRemoteRateMovie = (id: string): RateMovie =>
  new RemoteRateMovie(
    makeApiUrl(`/movie/${id}/rating`),
    makeAuthorizeHttpClientDecorator()
  )
