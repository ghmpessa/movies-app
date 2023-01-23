import React from 'react'
import {
  makeRemoteCreateSession,
  makeRemoteDeleteSession,
  makeRemoteLoadAccountDetails,
  makeRemoteRequestToken,
} from '@/main/factories/usecases'

import { Footer, Header, MainContainer } from '@/presentation/components'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  MakeHome,
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
          <Route path='/upcoming' element={<MakeUpcoming />} />
          <Route path='/search/:query' element={<MakeSearchPage />} />
          <Route path='/on_theaters' element={<MakeOnTheaters />} />
          <Route path='/popular' element={<MakePopular />} />
          <Route path='/top_rated' element={<MakeTopRated />} />
          <Route path='/:movieId' element={<MakeMoviePage />} />
          <Route path='/:id/watchlist' element={<MakeWatchList />} />
          <Route path='/' element={<MakeHome />} />
        </Routes>
      </MainContainer>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
