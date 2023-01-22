import React, { useEffect, useState } from 'react'
import { MoviePageStyles as Styled } from './styles'
import { BackdropSection, CastSection, DetailsSection } from './components'

import { Error, Loading } from '@/presentation/components'
import {
  AddToWatchList,
  LoadMovieCast,
  LoadMovieDetails,
  LoadMovieImages,
  LoadWatchList,
} from '@/domain/usecases'
import { Cast, Image } from '@/domain/models'
import { useAppContext } from '@/presentation/contexts'

type Props = {
  loadMovieDetails: LoadMovieDetails
  loadMovieCast: LoadMovieCast
  loadMovieImages: LoadMovieImages
  loadWatchList: LoadWatchList
  addToWatchList: AddToWatchList
}

const Movie: React.FC<Props> = ({
  loadMovieDetails,
  loadMovieCast,
  loadMovieImages,
  loadWatchList,
  addToWatchList,
}) => {
  const { getCurrentSession } = useAppContext()

  const [details, setDetails] = useState<LoadMovieDetails.Model>()
  const [cast, setCast] = useState<Cast.Model[]>([])
  const [images, setImages] = useState<Image.Model[]>([])
  const [onWatchList, setOnWatchList] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchMovie = async () => {
    try {
      const [details, { cast }, { backdrops }] = await Promise.all([
        loadMovieDetails.load(),
        loadMovieCast.load(),
        loadMovieImages.load(),
      ])
      setDetails(details)
      setCast(cast)
      setImages(backdrops)
      const session_id = getCurrentSession?.()
      const { results } = await loadWatchList.load({ session_id: session_id! })

      if (results.map(item => item.id).includes(details.id!))
        setOnWatchList(true)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToWatchList = async () => {
    const session_id = getCurrentSession?.()
    const watchlist = onWatchList ? false : true
    try {
      if (!session_id) return
      await addToWatchList.add({
        session_id,
        media_id: details!.id!,
        media_type: 'movie',
        watchlist,
      })
    } catch (error) {
    } finally {
      setOnWatchList(p => !p)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchMovie()
  }, [])

  return (
    <Styled.Container>
      {loading && (
        <Styled.LoadingContainer>
          <Loading />
        </Styled.LoadingContainer>
      )}
      {!loading && error && (
        <Error
          onTryAgain={() => {
            setLoading(true)
            fetchMovie()
          }}
        />
      )}
      {!loading && details && (
        <>
          <DetailsSection
            details={details}
            isOnWatchList={onWatchList}
            onAddToWatchList={handleAddToWatchList}
          />
          <CastSection cast={cast} />
          <BackdropSection images={images} title={details.title} />
        </>
      )}
    </Styled.Container>
  )
}

export default Movie
