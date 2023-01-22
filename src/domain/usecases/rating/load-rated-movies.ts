import { Movie } from '@/domain/models'

export interface LoadRatedMovies {
  load(params: LoadRatedMovies.Params): Promise<LoadRatedMovies.Model>
}

export namespace LoadRatedMovies {
  export type Model = {
    results: Array<Movie.Model & { rating: number }>
    page: number
    total_pages: number
    total_results: number
  }
  export type Params = {
    session_id: string
  }
}
