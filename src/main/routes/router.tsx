import React from 'react'
import {
  makeRemoteCreateSession,
  makeRemoteDeleteSession,
  makeRemoteLoadAccountDetails,
  makeRemoteRequestToken,
} from '@/main/factories/usecases'

import {
  Footer,
  Header,
  MainContainer,
  MovieListsHeader,
} from '@/presentation/components'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  MakeMovies,
  MakeWatchList,
  MakeMoviePage,
  MakeUpcoming,
  MakeOnTheaters,
  MakePopular,
  MakeTopRated,
  MakeSearchPage,
} from '@/main/factories/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header
        requestToken={makeRemoteRequestToken()}
        createSession={makeRemoteCreateSession()}
        deleteSession={makeRemoteDeleteSession()}
        loadAccountDetails={makeRemoteLoadAccountDetails()}
      />
      <MainContainer>
        <Routes>
          <Route path='/' element={<MovieListsHeader />}>
            <Route index element={<MakeMovies />} />
            <Route path='upcoming' element={<MakeUpcoming />} />
            <Route path='search/:query' element={<MakeSearchPage />} />
            <Route path='on_theaters' element={<MakeOnTheaters />} />
            <Route path='popular' element={<MakePopular />} />
            <Route path='top_rated' element={<MakeTopRated />} />
          </Route>
          <Route path='/:movieId' element={<MakeMoviePage />} />
          <Route path='/:id/watchlist' element={<MakeWatchList />} />
        </Routes>
      </MainContainer>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
