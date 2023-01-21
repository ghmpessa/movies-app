export interface LoadGenres {
  load(): Promise<LoadGenres.Model>
}

export namespace LoadGenres {
  export type Model = {
    id: number
    name: string
  }
}
