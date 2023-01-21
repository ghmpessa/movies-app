import { Home } from '@/presentation/pages'
import { makeRemoteLoadMovies } from '../../usecases/movies'

export const MakeHome: React.FC = () => {
  return <Home loadMovies={makeRemoteLoadMovies()} />
}
