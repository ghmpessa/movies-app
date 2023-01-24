import {
  makeRemoteAddToWatchList,
  makeRemoteLoadWatchList,
} from '@/main/factories/usecases'
import {
  makeRemoteDeleteRating,
  makeRemoteLoadRatedMovies,
  makeRemoteRateMovie,
} from '@/main/factories/usecases/rating'
import {
  makeRemoteLoadMovieCast,
  makeRemoteLoadMovieDetails,
  makeRemoteLoadMovieImages,
} from '@/main/factories/usecases/movies'
import { getCurrentAccount } from '@/main/adapters'
import { MoviePage } from '@/presentation/pages'
import { useParams } from 'react-router-dom'

export const MakeMoviePage: React.FC = () => {
  const { movieId } = useParams()
  const account = getCurrentAccount?.()

  const account_id = !account ? '' : account.id.toString()

  return (
    <MoviePage
      loadMovieDetails={makeRemoteLoadMovieDetails(movieId!)}
      loadMovieCast={makeRemoteLoadMovieCast(movieId!)}
      loadMovieImages={makeRemoteLoadMovieImages(movieId!)}
      loadWatchList={makeRemoteLoadWatchList(account_id)}
      addToWatchList={makeRemoteAddToWatchList(account_id)}
      addRating={makeRemoteRateMovie(movieId!)}
      removeRating={makeRemoteDeleteRating(movieId!)}
      loadRatedMovies={makeRemoteLoadRatedMovies(account_id)}
    />
  )
}
