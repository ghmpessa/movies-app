import { Cast } from '../model'

export interface LoadMovieCast {
  load(params: LoadMovieCast.Params): Promise<LoadMovieCast.Model>
}

export namespace LoadMovieCast {
  export type Model = {
    id: number
    cast: Array<Cast.Model>
  }
  export type Params = {
    movie_id: number
  }
}
