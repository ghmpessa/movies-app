import { Movie } from '@/domain/models'

export interface SearchMovies {
  search(params: SearchMovies.Params): Promise<SearchMovies.Model>
}

export namespace SearchMovies {
  export type Model = {
    results: Array<Movie.Model>
    page: number
    total_pages: number
    total_results: number
  }
  export type Params = { query: string }
}
