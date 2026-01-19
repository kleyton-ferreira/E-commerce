import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SigUpPage from './pages/sign-up/sig-up.page'

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SigUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
