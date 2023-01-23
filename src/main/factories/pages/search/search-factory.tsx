import { SearchPage } from '@/presentation/pages'
import { makeRemoteSearchMovies } from '@/main/factories/usecases/movies'

export const MakeSearchPage: React.FC = () => {
  return <SearchPage searchMovies={makeRemoteSearchMovies()} />
}
