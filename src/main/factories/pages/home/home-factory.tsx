import { Home } from '@/presentation/pages'
import {
  makeRemoteLoadMovies,
  makeRemoteSearchMovies,
} from '@/main/factories/usecases/movies'

export const MakeHome: React.FC = () => {
  return (
    <Home
      loadMovies={makeRemoteLoadMovies('/discover/movie')}
      searchMovies={makeRemoteSearchMovies()}
    />
  )
}
