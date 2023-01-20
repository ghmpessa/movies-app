export interface RequestToken {
  request(): Promise<RequestToken.Model>
}

export namespace RequestToken {
  export type Model = {
    success: boolean
    expires_at: string
    request_token: string
  }
}
