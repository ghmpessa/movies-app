import { Image } from '@/domain/model'

export interface LoadMovieImages {
  load(params: LoadMovieImages.Params): Promise<LoadMovieImages.Model>
}

export namespace LoadMovieImages {
  export type Model = {
    id: number
    backdrops: Array<Image.Model>
    posters: Array<Image.Model>
  }
  export type Params = {
    movie_id: number
  }
}
