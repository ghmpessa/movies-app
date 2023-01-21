import { RemoteRequestToken } from '@/data/usecases/session'
import { RequestToken } from '@/domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteRequestToken = (): RequestToken =>
  new RemoteRequestToken(
    makeApiUrl('/authentication/token/new'),
    makeAxiosHttpClient()
  )
