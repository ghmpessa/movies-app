import React from 'react'
import { DetailsSectionStyles as Styled } from './styles'
import { LoadMovieDetails } from '@/domain/usecases'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded'
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded'

type Props = {
  details: LoadMovieDetails.Model
}

const DetailsSection: React.FC<Props> = ({ details }) => {
  const prefix = 'https://image.tmdb.org/t/p/w300'
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

            <Styled.Button variant='circular' color='primary'>
              <BookmarkAddRoundedIcon />
            </Styled.Button>
          </Styled.HeaderButtonsContainer>
        </Styled.HeaderContainer>
        <Styled.MainInfosContainer>
          <h3>overview</h3>
          <p>{details.overview}</p>
        </Styled.MainInfosContainer>

        <Styled.MainInfosContainer>
          <h3>genres</h3>
          <Styled.GenresContainer>
            <Styled.GenresCard>{'Action'}</Styled.GenresCard>
            <Styled.GenresCard>{'Comedy'}</Styled.GenresCard>
            <Styled.GenresCard>{'Animation'}</Styled.GenresCard>
          </Styled.GenresContainer>
        </Styled.MainInfosContainer>

        <Styled.MainInfosContainer>
          <h3>infos</h3>
          <Styled.FooterInfosContainer>
            <Styled.FooterInfoContainer className='first'>
              <CalendarMonthIcon sx={{ width: 32, height: 32 }} />
              <label>{details.release_date}</label>
            </Styled.FooterInfoContainer>

            <Styled.FooterInfoContainer>
              <QueryBuilderRoundedIcon sx={{ width: 32, height: 32 }} />
              <label>
                {details.runtime}
                {' min'}
              </label>
            </Styled.FooterInfoContainer>

            <Styled.FooterInfoContainer>
              <AttachMoneyOutlinedIcon sx={{ width: 32, height: 32 }} />

              <label>{details.budget}</label>
            </Styled.FooterInfoContainer>

            <Styled.FooterInfoContainer>
              <ConfirmationNumberRoundedIcon sx={{ width: 32, height: 32 }} />
              <label>${details.revenue}</label>
            </Styled.FooterInfoContainer>
          </Styled.FooterInfosContainer>
        </Styled.MainInfosContainer>
      </Styled.InfosContainer>
    </Styled.Container>
  )
}

export default DetailsSection
