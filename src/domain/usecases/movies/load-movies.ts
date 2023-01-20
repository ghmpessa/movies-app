import { Movie } from '@/domain/model'

export interface LoadMovies {
  load(): Promise<LoadMovies.Model>
}

export namespace LoadMovies {
  export type Model = {
    results: Array<Movie.Model>
    page: number
    total_pages: number
    total_results: number
  }
}
