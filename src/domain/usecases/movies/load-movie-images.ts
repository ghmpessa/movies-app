import { Image } from '@/domain/model'

export interface LoadMovieImages {
  load(): Promise<LoadMovieImages.Model>
}

export namespace LoadMovieImages {
  export type Model = {
    id: number
    backdrops: Array<Image.Model>
    posters: Array<Image.Model>
  }
}
