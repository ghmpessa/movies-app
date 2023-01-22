export interface LoadGenres {
  load(): Promise<LoadGenres.Model>
}

export namespace LoadGenres {
  export type Model = {
    genres: Array<{ id: number; name: string }>
  }
}
