import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SigUpPage from './pages/sign-up/sig-up.page'
import { onAuthStateChanged } from 'firebase/auth'

// UTILITS
import { auth } from './config/firebase.config'

const App: FunctionComponent = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })

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
