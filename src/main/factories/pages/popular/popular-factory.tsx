import { Popular } from '@/presentation/pages'
import { makeRemoteLoadMovies } from '@/main/factories/usecases/movies'

export const MakePopular: React.FC = () => {
  return <Popular loadMovies={makeRemoteLoadMovies('/movie/popular')} />
}
