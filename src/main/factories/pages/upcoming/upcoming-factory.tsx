import { makeRemoteLoadMovies } from '@/main/factories/usecases/movies'
import { Movies } from '@/presentation/pages'

export const MakeUpcoming: React.FC = () => {
  return <Movies loadMovies={makeRemoteLoadMovies('/movie/upcoming')} />
}
