export interface DeleteRating {
  MethodName(params: DeleteRating.Params): Promise<void>
}

export namespace DeleteRating {
  export type Params = {
    movie_id: number
  }
}
