import { makeRemoteLoadMovies } from '@/main/factories/usecases/movies'
import { Movies } from '@/presentation/pages'

export const MakeMovies: React.FC = () => {
  return <Movies loadMovies={makeRemoteLoadMovies('/discover/movie')} />
}
