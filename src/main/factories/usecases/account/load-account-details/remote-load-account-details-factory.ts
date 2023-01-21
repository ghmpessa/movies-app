import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadAccountDetails } from '@/data/usecases/account'
import { LoadAccountDetails } from '@/domain/usecases'

export const makeRemoteLoadAccountDetails = (): LoadAccountDetails =>
  new RemoteLoadAccountDetails(makeApiUrl('/account'), makeAxiosHttpClient())
