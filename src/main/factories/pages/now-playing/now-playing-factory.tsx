import { makeRemoteLoadMovies } from '@/main/factories/usecases/movies'
import { Movies } from '@/presentation/pages'

export const MakeOnTheaters: React.FC = () => {
  return <Movies loadMovies={makeRemoteLoadMovies('/movie/now_playing')} />
}
