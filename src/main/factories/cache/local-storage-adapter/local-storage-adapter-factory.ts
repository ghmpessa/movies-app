import { LocalStorageAdapter } from '@/infra/protocols/cache'

export const makeLocalStorageAdapter = (): LocalStorageAdapter =>
  new LocalStorageAdapter()
