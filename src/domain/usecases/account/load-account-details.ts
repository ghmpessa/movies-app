import { Account } from '@/domain/models'

export interface LoadAccountDetails {
  load(params: LoadAccountDetails.Params): Promise<LoadAccountDetails.Model>
}

export namespace LoadAccountDetails {
  export type Model = Account.Model
  export type Params = {
    session_id: string
  }
}
