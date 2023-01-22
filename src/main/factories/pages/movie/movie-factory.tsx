import { MoviePage } from '@/presentation/pages'
import { useParams } from 'react-router-dom'
import {
  makeRemoteLoadMovieCast,
  makeRemoteLoadMovieDetails,
  makeRemoteLoadMovieImages,
} from '@/main/factories/usecases/movies'

export const MakeMoviePage: React.FC = () => {
  const { movieId } = useParams()

  return (
    <MoviePage
      loadMovieDetails={makeRemoteLoadMovieDetails(movieId!)}
      loadMovieCast={makeRemoteLoadMovieCast(movieId!)}
      loadMovieImages={makeRemoteLoadMovieImages(movieId)}
    />
  )
}
