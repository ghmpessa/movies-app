import { OnTheaters } from '@/presentation/pages'
import { makeRemoteLoadMovies } from '@/main/factories/usecases/movies'

export const MakeOnTheaters: React.FC = () => {
  return <OnTheaters loadMovies={makeRemoteLoadMovies('/movie/now_playing')} />
}
