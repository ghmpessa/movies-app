import React, { useState } from 'react'
import { DetailsSectionStyles as Styled } from './styles'
import { LoadMovieDetails } from '@/domain/usecases'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded'
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded'
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded'
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded'
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'

import { format } from 'date-fns'
import { Rating } from '@mui/material'

type Props = {
  details: LoadMovieDetails.Model
  onAddToWatchList?: () => void
  isOnWatchList?: boolean
  rating: number
  onRating: (rating: number) => void
  onRemoveRating: () => void
}

const DetailsSection: React.FC<Props> = ({
  details,
  onAddToWatchList,
  isOnWatchList,
  rating,
  onRating,
  onRemoveRating,
}) => {
  // format date
  const day = details.release_date?.slice(8)
  const month = details.release_date?.slice(5, 7)
  const year = details.release_date?.slice(0, 4)
  const releaseDate = details.release_date
    ? format(new Date([month, day, year].join('-')), 'MMMM dd, yyyy')
    : '-'
  // image url
  const prefix = 'https://image.tmdb.org/t/p/w300'

  // create currency formatter
  const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <Styled.Container>
      <Styled.Poster src={`${prefix}/${details.poster_path}`} />

      <Styled.InfosContainer>
        <Styled.HeaderContainer>
          <Styled.TitleContainer>
            <h2>{details.title}</h2>
            <h6>{details.tagline}</h6>
          </Styled.TitleContainer>

          <Styled.HeaderButtonsContainer>
            <Styled.Rate rateColor='green'>
              <label>{details.vote_average?.toFixed(1)}</label>
            </Styled.Rate>

            <Styled.Button
              variant='circular'
              color={isOnWatchList ? 'success' : 'primary'}
              onClick={onAddToWatchList}
              title={
                isOnWatchList ? 'Remove from watchlist' : 'Add to watchlist'
              }
            >
              {!isOnWatchList && <BookmarkAddRoundedIcon />}
              {isOnWatchList && <BookmarkRemoveIcon sx={{ color: 'white' }} />}
            </Styled.Button>
          </Styled.HeaderButtonsContainer>
        </Styled.HeaderContainer>

        <Styled.RatingContainer onClick={onRemoveRating}>
          <Rating
            value={rating}
            max={5}
            precision={0.5}
            onChange={(_, rating) => onRating(rating!)}
            readOnly={rating > 0}
            icon={
              <FavoriteRoundedIcon
                sx={{ width: 32, height: 32 }}
                color='primary'
              />
            }
            emptyIcon={
              <FavoriteBorderRoundedIcon sx={{ width: 32, height: 32 }} />
            }
          />
        </Styled.RatingContainer>

        <Styled.MainInfosContainer>
          <h3>overview</h3>
          <p>{details.overview}</p>
        </Styled.MainInfosContainer>

        <Styled.MainInfosContainer>
          <h3>genres</h3>
          <Styled.GenresContainer>
            {details.genres?.map(genre => (
              <Styled.GenresCard key={genre.id}>{genre.name}</Styled.GenresCard>
            ))}
          </Styled.GenresContainer>
        </Styled.MainInfosContainer>

        <Styled.MainInfosContainer>
          <h3>infos</h3>
          <Styled.FooterInfosContainer>
            <Styled.FooterInfoContainer className='first'>
              <CalendarMonthIcon sx={{ width: 32, height: 32 }} />
              <label>{releaseDate}</label>
            </Styled.FooterInfoContainer>

            <Styled.FooterInfoContainer>
              <QueryBuilderRoundedIcon sx={{ width: 32, height: 32 }} />
              <label>
                {details.runtime}
                {' min'}
              </label>
            </Styled.FooterInfoContainer>

            <Styled.FooterInfoContainer>
              <RequestQuoteRoundedIcon sx={{ width: 32, height: 32 }} />

              <label>{formatCurrency.format(details.budget)}</label>
            </Styled.FooterInfoContainer>

            <Styled.FooterInfoContainer>
              <ConfirmationNumberRoundedIcon sx={{ width: 32, height: 32 }} />
              <label>{formatCurrency.format(details.revenue)}</label>
            </Styled.FooterInfoContainer>
          </Styled.FooterInfosContainer>
        </Styled.MainInfosContainer>
      </Styled.InfosContainer>
    </Styled.Container>
  )
}

export default DetailsSection
