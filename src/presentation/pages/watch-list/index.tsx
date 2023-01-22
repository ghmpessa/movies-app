import React, { useState, useEffect, useCallback } from 'react'
import { WathlistStyles as Styled } from './styles'

import {
  Error,
  ScrollToTopFab,
  Loading,
  MovieList,
} from '@/presentation/components'
import { LoadWatchList } from '@/domain/usecases'
import { getCurrentSession } from '@/main/adapters'

type Props = {
  loadWatchList: LoadWatchList
}

const WatchList: React.FC<Props> = ({ loadWatchList }) => {
  const [data, setData] = useState<LoadWatchList.Model>({
    results: [],
    page: 1,
    total_pages: 1,
    total_results: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const session_id = getCurrentSession?.()

  const fetchMovies = useCallback(
    async (page = 1) => {
      try {
        const response = await loadWatchList.load({ session_id, page })

        setData({
          ...response,
          results: [...data.results, ...response.results],
        })
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    },
    [data]
  )

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <Styled.Container isEmpty={data.results.length === 0}>
      <Styled.Title>my watchlist</Styled.Title>
      {loading && (
        <Styled.LoadingContainer>
          <Loading />
        </Styled.LoadingContainer>
      )}
      {!loading && !error && <MovieList movies={data.results} />}
      {!loading && error && <Error />}
      <ScrollToTopFab />
      {!loading &&
        data.page !== data.total_pages &&
        data.results.length > 0 && (
          <Styled.LoadMore
            variant='contained'
            color='primary'
            onClick={() => fetchMovies(data.page + 1)}
          >
            Load more
          </Styled.LoadMore>
        )}
    </Styled.Container>
  )
}

export default WatchList
