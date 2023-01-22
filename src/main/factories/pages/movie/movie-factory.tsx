import { MoviePage } from '@/presentation/pages'
import { useParams } from 'react-router-dom'
import { makeRemoteLoadMovieDetails } from '../../usecases/movies'

export const MakeMoviePage: React.FC = () => {
  const { movieId } = useParams()

  return <MoviePage loadMovieDetails={makeRemoteLoadMovieDetails(movieId!)} />
}
