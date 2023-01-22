import { makeApiUrl } from '@/main/factories/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/decorators'
import { RemoteDeleteRating } from '@/data/usecases/rating'
import { DeleteRating } from '@/domain/usecases'

export const makeRemoteDeleteRating = (id: string): DeleteRating =>
  new RemoteDeleteRating(
    makeApiUrl(`/movie/${id}/rating`),
    makeAuthorizeHttpClientDecorator()
  )
