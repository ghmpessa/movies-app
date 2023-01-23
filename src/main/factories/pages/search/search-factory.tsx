import { makeRemoteSearchMovies } from '@/main/factories/usecases/movies'
import { SearchPage } from '@/presentation/pages'

export const MakeSearchPage: React.FC = () => {
  return <SearchPage searchMovies={makeRemoteSearchMovies()} />
}
