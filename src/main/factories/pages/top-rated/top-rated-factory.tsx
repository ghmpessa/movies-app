import { TopRated } from '@/presentation/pages'
import { makeRemoteLoadMovies } from '@/main/factories/usecases/movies'

export const MakeTopRated: React.FC = () => {
  return <TopRated loadMovies={makeRemoteLoadMovies('/movie/top_rated')} />
}
