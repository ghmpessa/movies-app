import React, { useEffect, useState } from 'react'
import { MoviePageStyles as Styled } from './styles'
import { BackdropSection, CastSection, DetailsSection } from './components'

import { useAppContext } from '@/presentation/contexts'

import { Error, Loading, Feedback } from '@/presentation/components'
import { FeedbackType } from '@/presentation/components/feedback'

import {
  AddToWatchList,
  DeleteRating,
  LoadMovieCast,
  LoadMovieDetails,
  LoadMovieImages,
  LoadRatedMovies,
  LoadWatchList,
  RateMovie,
} from '@/domain/usecases'
import { Cast, Image } from '@/domain/models'

type Props = {
  loadMovieDetails: LoadMovieDetails
  loadMovieCast: LoadMovieCast
  loadMovieImages: LoadMovieImages
  loadWatchList: LoadWatchList
  addToWatchList: AddToWatchList
  addRating: RateMovie
  removeRating: DeleteRating
  loadRatedMovies: LoadRatedMovies
}

const Movie: React.FC<Props> = ({
  loadMovieDetails,
  loadMovieCast,
  loadMovieImages,
  loadWatchList,
  addToWatchList,
  addRating,
  removeRating,
  loadRatedMovies,
}) => {
  const { getCurrentSession } = useAppContext()

  const [details, setDetails] = useState<LoadMovieDetails.Model>()
  const [cast, setCast] = useState<Cast.Model[]>([])
  const [images, setImages] = useState<Image.Model[]>([])
  const [onWatchList, setOnWatchList] = useState(false)
  const [rating, setRating] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [feedback, setFeedback] = useState<FeedbackType>({
    message: '',
    type: 'success',
    open: false,
  })

  const fetchMovie = async () => {
    setError(false)
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

      if (!session_id) return
      const [{ results }, { results: ratedMovies }] = await Promise.all([
        loadWatchList.load({ session_id }),
        loadRatedMovies.load({ session_id }),
      ])

      if (ratedMovies.map(movie => movie.id).includes(details.id)) {
        const findMovie = ratedMovies.filter(movie => movie.id === details.id)
        setRating(findMovie[0].rating)
      }

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

    if (!session_id) return
    try {
      await addToWatchList.add({
        session_id,
        media_id: details!.id!,
        media_type: 'movie',
        watchlist,
      })
      setFeedback({
        message: watchlist
          ? 'Added to your watchlist'
          : `Removed ${details!.title} from your watchlist `,
        open: true,
        type: 'success',
      })
    } catch (error) {
      setFeedback({
        message: watchlist
          ? 'Error while adding to watchlist'
          : 'Error while removing to watchlist',
        open: true,
        type: 'error',
      })
    } finally {
      setOnWatchList(p => !p)
    }
  }

  const handleRating = async (rating: number) => {
    try {
      await addRating.rate({ value: rating })
      setRating(rating)
      setFeedback({
        message: 'Rating added!',
        open: true,
        type: 'success',
      })
    } catch (error) {
      setFeedback({
        message: 'Error during rating',
        open: true,
        type: 'error',
      })
    }
  }

  const handleRemoveRating = async () => {
    try {
      if (rating === 0) return
      await removeRating.delete()
      setRating(0)
      setFeedback({
        message: 'Rating removed',
        open: true,
        type: 'success',
      })
    } catch (error) {
      setFeedback({
        message: 'Error during rating remove',
        open: true,
        type: 'error',
      })
    }
  }

  useEffect(() => {
    let isMounted = true
    window.scrollTo(0, 0)
    if (isMounted) fetchMovie()

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
            rating={rating}
            onRating={handleRating}
            onRemoveRating={handleRemoveRating}
          />
          <CastSection cast={cast} />
          <BackdropSection images={images} title={details.title} />
        </>
      )}
      <Feedback
        message={feedback.message}
        open={feedback.open}
        type={feedback.type}
        closeFeedback={() =>
          setFeedback({
            message: '',
            type: 'success',
            open: false,
          })
        }
      />
    </Styled.Container>
  )
}

export default Movie
