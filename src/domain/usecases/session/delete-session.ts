export interface DeleteSession {
  delete(params: DeleteSession.Params): Promise<DeleteSession.Model>
}

export namespace DeleteSession {
  export type Model = {
    success: boolean
  }

  export type Params = {
    session_id: string
  }
}
