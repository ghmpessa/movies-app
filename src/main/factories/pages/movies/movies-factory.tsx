import { Movies } from '@/presentation/pages'
import { makeRemoteLoadMovies } from '@/main/factories/usecases/movies'

export const MakeMovies: React.FC = () => {
  return <Movies loadMovies={makeRemoteLoadMovies('/discover/movie')} />
}
