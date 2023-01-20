export interface DeleteRating {
  delete(): Promise<DeleteRating.Model>
}

export namespace DeleteRating {
  export type Model = {
    success: boolean
  }
}
