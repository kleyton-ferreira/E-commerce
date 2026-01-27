import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'

// PAGES
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SigUpPage from './pages/sign-up/sig-up.page'

// UTILITS
import { auth, db } from './config/firebase.config'
import { UserContext } from './context/user.context'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      return logoutUser()
    }

    const isSigningIn = !isAuthenticated && user
    if (isSigningIn) {
      const queryuSnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )
      const userFromFirestore = queryuSnapshot.docs[0]?.data()
      return loginUser(userFromFirestore as any)
    }
  })

  console.log({ isAuthenticated })

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
