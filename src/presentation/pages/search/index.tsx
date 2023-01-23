import React, { useEffect, useState, useCallback, useRef } from 'react'
import { SearchPageStyles as Styled } from './styles'

import {
  Error,
  ScrollToTopFab,
  Loading,
  MovieList,
} from '@/presentation/components'
import { LoadMovies, SearchMovies } from '@/domain/usecases'
import { useParams } from 'react-router-dom'

type Props = {
  searchMovies: SearchMovies
}

const SearchPage: React.FC<Props> = ({ searchMovies }) => {
  const { query } = useParams()
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

  const fetchMovies = async (page = 1) => {
    setError(false)
    try {
      const response = await searchMovies.search({ query: query || '', page })

      setData({
        ...response,
        results: [...data.results, ...response.results],
      })
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let isMounted = true

    if (isMounted) fetchMovies()

    return () => {
      isMounted = false
    }
  }, [query])

  return (
    <Styled.Container>
      {loading && <Loading />}
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

export default SearchPage
