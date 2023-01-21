import { makeLocalStorageAdapter } from '@/main/factories/cache'
import { Account } from '@/domain/models'

export const setCurrentAccount = (account: Account.Current | null): void =>
  makeLocalStorageAdapter().set('account', account)

export const getCurrentAccount = (): Account.Current =>
  makeLocalStorageAdapter().get('account')
