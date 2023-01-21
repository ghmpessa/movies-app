import { makeLocalStorageAdapter } from '@/main/factories/cache'

export const setCurrentSession = (session_id: string): void =>
  makeLocalStorageAdapter().set('session', session_id)

export const getCurrentSession = (): string =>
  makeLocalStorageAdapter().get('session')
