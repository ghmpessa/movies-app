import { RemoteCreateSession } from '@/data/usecases/session'
import { CreateSession } from '@/domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteCreateSession = (): CreateSession =>
  new RemoteCreateSession(
    makeApiUrl('/authentication/session/new'),
    makeAxiosHttpClient()
  )
