import React from 'react'
import {
  makeRemoteCreateSession,
  makeRemoteDeleteSession,
  makeRemoteRequestToken,
} from '@/main/factories/usecases'

import { Footer, Header, MainContainer } from '@/presentation/components'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeHome } from '@/main/factories/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header
        requestToken={makeRemoteRequestToken()}
        createSession={makeRemoteCreateSession()}
        deleteSession={makeRemoteDeleteSession()}
      />
      <MainContainer>
        <Routes>
          <Route path='/' element={<MakeHome />} />
        </Routes>
      </MainContainer>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
