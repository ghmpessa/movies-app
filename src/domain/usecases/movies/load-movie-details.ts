import { Movie } from '@/domain/model'

export interface LoadMovieDetails {
  load(): Promise<LoadMovieDetails.Model>
}

export namespace LoadMovieDetails {
  export type Model = {
    budget: number
    revenue: number
    runtime: number
    tagline: string
  } & Movie.Model
}
