import React from 'react'
import {
  makeRemoteCreateSession,
  makeRemoteDeleteSession,
  makeRemoteLoadAccountDetails,
  makeRemoteRequestToken,
} from '@/main/factories/usecases'

import { Footer, Header, MainContainer } from '@/presentation/components'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeHome, MakeWatchList, MakeMoviePage } from '@/main/factories/pages'

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
          <Route path='/' element={<MakeHome />} />
          <Route path='/:movieId' element={<MakeMoviePage />} />
          <Route path='/:id/watch-list' element={<MakeWatchList />} />
        </Routes>
      </MainContainer>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
