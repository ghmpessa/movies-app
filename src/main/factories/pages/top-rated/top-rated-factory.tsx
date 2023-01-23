import { makeRemoteLoadMovies } from '@/main/factories/usecases/movies'
import { Movies } from '@/presentation/pages'

export const MakeTopRated: React.FC = () => {
  return <Movies loadMovies={makeRemoteLoadMovies('/movie/top_rated')} />
}
