import { getCurrentAccount } from '@/main/adapters'
import { makeRemoteLoadWatchList } from '@/main/factories/usecases'
import { WatchList } from '@/presentation/pages'

export const MakeWatchList: React.FC = () => {
  const account = getCurrentAccount?.()

  const account_id = !account ? '' : account.id.toString()

  return <WatchList loadWatchList={makeRemoteLoadWatchList(account_id)} />
}
