import { makeRemoteLoadMovies } from '@/main/factories/usecases/movies'
import { Movies } from '@/presentation/pages'

export const MakePopular: React.FC = () => {
  return <Movies loadMovies={makeRemoteLoadMovies('/movie/popular')} />
}
