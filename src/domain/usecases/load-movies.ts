import { Movie } from '@/domain/model'

export interface LoadMovies {
  load(params: LoadMovies.Params): Promise<LoadMovies.Model>
}

export namespace LoadMovies {
  export type Model = {
    results: Movie.Model[]
    page: number
    total_pages: number
    total_results: number
  }
  export type Params = {
    time_window: string
  }
}
