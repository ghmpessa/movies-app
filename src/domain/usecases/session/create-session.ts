export interface CreateSession {
  create(params: CreateSession.Params): Promise<CreateSession.Model>
}

export namespace CreateSession {
  export type Model = {
    success: boolean
    session_id: string
  }

  export type Params = {
    request_token: string
  }
}
