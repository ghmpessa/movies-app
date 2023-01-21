import { Cast } from '../../models'

export interface LoadMovieCast {
  load(): Promise<LoadMovieCast.Model>
}

export namespace LoadMovieCast {
  export type Model = {
    id: number
    cast: Array<Cast.Model>
  }
}
