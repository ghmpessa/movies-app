import { makeLocalStorageAdapter } from '@/main/factories/cache'

export const setRequestToken = (requestToken: string | null): void =>
  makeLocalStorageAdapter().set('request_token', requestToken)

export const getRequestToken = (): string =>
  makeLocalStorageAdapter().get('request_token')
