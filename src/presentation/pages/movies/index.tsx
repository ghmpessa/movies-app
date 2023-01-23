import React, { useEffect, useState, useCallback } from 'react'
import { HomePageStyles as Styled } from './styles'

import {
  Error,
  ScrollToTopFab,
  Loading,
  MovieList,
} from '@/presentation/components'
import { LoadMovies } from '@/domain/usecases'

type Props = {
  loadMovies: LoadMovies
}

const HomePage: React.FC<Props> = ({ loadMovies }) => {
  const [data, setData] = useState<LoadMovies.Model>({
    results: [],
    page: 1,
    total_pages: 0,
    total_results: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const showLoadMore =
    !loading && data.results.length > 0 && data.total_pages !== data.page

  const fetchMovies = useCallback(
    async (page = 1) => {
      setError(false)
      try {
        const response = await loadMovies.load({ page })

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
    let isMounted = true

    if (isMounted) fetchMovies()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Styled.Container>
      {loading && (
        <Styled.LoadingContainer>
          <Loading />
        </Styled.LoadingContainer>
      )}
      {!loading && !error && (
        <MovieList
          movies={data ? data.results : []}
          emptyList={{
            title: 'This movie is not released yet',
            buttonTitle: 'Clear search',
          }}
          handleClick={() => fetchMovies()}
        />
      )}
      {!loading && error && (
        <Error
          onTryAgain={() => {
            setLoading(true)
            fetchMovies()
          }}
        />
      )}
      {showLoadMore && (
        <Styled.LoadMore
          variant='contained'
          color='primary'
          onClick={() => fetchMovies(data.page + 1)}
        >
          Load more
        </Styled.LoadMore>
      )}
      <ScrollToTopFab />
    </Styled.Container>
  )
}

export default HomePage
