import React, { useEffect, useState, useCallback } from 'react'
import { HomePageStyles as Styled } from './styles'

import { Error, Fab, Loading, MovieList } from '@/presentation/components'
import { LoadMovies } from '@/domain/usecases'

import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'

type Props = {
  loadMovies: LoadMovies
}

const HomePage: React.FC<Props> = ({ loadMovies }) => {
  const [isFabVisible, setIsFabVisible] = useState(false)
  const [data, setData] = useState<LoadMovies.Model>({
    results: [],
    page: 1,
    total_pages: 0,
    total_results: 0,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = useCallback(
    async (page = 1) => {
      console.log('pagina', page)
      try {
        if (loading) return

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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    let isMounted = true

    if (isMounted) fetchMovies()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const fabListener = () => {
      if (window.scrollY > window.innerHeight && !isFabVisible) {
        setIsFabVisible(true)
      } else if (window.scrollY < window.innerHeight && isFabVisible) {
        setIsFabVisible(false)
      }
    }

    window.addEventListener('scroll', fabListener)

    return () => {
      window.removeEventListener('scroll', fabListener)
    }
  }, [isFabVisible])

  return (
    <Styled.Container>
      {loading && (
        <Styled.LoadingContainer>
          <Loading />
        </Styled.LoadingContainer>
      )}
      {!loading && !error && <MovieList movies={data ? data.results : []} />}
      {!loading && error && <Error />}
      <Fab isVisible={isFabVisible} handleScrollToTop={handleScrollToTop}>
        <KeyboardDoubleArrowUpRoundedIcon />
      </Fab>
      {!loading && (
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

export default HomePage
