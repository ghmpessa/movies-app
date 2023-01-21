import { getCurrentAccount } from '@/main/adapters'
import { makeRemoteLoadWatchList } from '@/main/factories/usecases'
import { WatchList } from '@/presentation/pages'

export const MakeWatchList: React.FC = () => {
  const id = getCurrentAccount?.().id
  return <WatchList loadWatchList={makeRemoteLoadWatchList(id)} />
}
