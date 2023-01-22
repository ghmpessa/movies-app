import React, { useEffect, useState } from 'react'
import { MoviePageStyles as Styled } from './styles'
import { BackdropSection, CastSection, DetailsSection } from './components'

import { Error, Loading } from '@/presentation/components'
import {
  LoadMovieCast,
  LoadMovieDetails,
  LoadMovieImages,
} from '@/domain/usecases'
import { Cast, Image } from '@/domain/models'

type Props = {
  loadMovieDetails: LoadMovieDetails
  loadMovieCast: LoadMovieCast
  loadMovieImages: LoadMovieImages
}

const Movie: React.FC<Props> = ({
  loadMovieDetails,
  loadMovieCast,
  loadMovieImages,
}) => {
  const [details, setDetails] = useState<LoadMovieDetails.Model>()
  const [cast, setCast] = useState<Cast.Model[]>([])
  const [images, setImages] = useState<Image.Model[]>([])
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
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
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
      {!loading && error && <Error />}
      {!loading && details && (
        <>
          <DetailsSection details={details} />
          <CastSection cast={cast} />
          <BackdropSection images={images} title={details.title} />
        </>
      )}
    </Styled.Container>
  )
}

export default Movie
