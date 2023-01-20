import React from 'react'
import { Footer, Header, MainContainer } from '@/presentation/components'
import { Home } from '@/presentation/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </MainContainer>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
