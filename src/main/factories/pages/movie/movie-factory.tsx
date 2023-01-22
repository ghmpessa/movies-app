import { MoviePage } from '@/presentation/pages'
import { useParams } from 'react-router-dom'
import {
  makeRemoteLoadMovieCast,
  makeRemoteLoadMovieDetails,
  makeRemoteLoadMovieImages,
} from '@/main/factories/usecases/movies'
import {
  makeRemoteAddToWatchList,
  makeRemoteLoadWatchList,
} from '../../usecases'
import { getCurrentAccount } from '@/main/adapters'

export const MakeMoviePage: React.FC = () => {
  const { movieId } = useParams()
  const account = getCurrentAccount?.()

  const account_id = account.id === 0 ? '' : account.id.toString()

  return (
    <MoviePage
      loadMovieDetails={makeRemoteLoadMovieDetails(movieId!)}
      loadMovieCast={makeRemoteLoadMovieCast(movieId!)}
      loadMovieImages={makeRemoteLoadMovieImages(movieId!)}
      loadWatchList={makeRemoteLoadWatchList(account_id)}
      addToWatchList={makeRemoteAddToWatchList(account_id)}
    />
  )
}
