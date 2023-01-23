import { makeRemoteLoadMovies } from '@/main/factories/usecases/movies'
import { Upcoming } from '@/presentation/pages'

export const MakeUpcoming: React.FC = () => {
  return <Upcoming loadMovies={makeRemoteLoadMovies('/movie/upcoming')} />
}
