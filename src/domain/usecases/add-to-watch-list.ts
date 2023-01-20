export interface AddToWatchList {
  add(params: AddToWatchList.Params): Promise<void>
}

export namespace AddToWatchList {
  export type Params = {
    session_id: string
    media_type: string
    media_id: number
    watchlist: boolean
  }
}
