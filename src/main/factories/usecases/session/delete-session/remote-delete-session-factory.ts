import { RemoteDeleteSession } from '@/data/usecases/session'
import { DeleteSession } from '@/domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'

export const makeRemoteDeleteSession = (): DeleteSession =>
  new RemoteDeleteSession(
    makeApiUrl('/authentication/session'),
    makeAxiosHttpClient()
  )
