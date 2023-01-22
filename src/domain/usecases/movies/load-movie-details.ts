import { Movie } from '@/domain/models'

export interface LoadMovieDetails {
  load(): Promise<LoadMovieDetails.Model>
}

export namespace LoadMovieDetails {
  export type Model = {
    budget: number
    revenue: number
    runtime: number
    tagline: string
    genres: Array<{ id: number; name: string }>
  } & Movie.Model
}
