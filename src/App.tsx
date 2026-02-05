import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'

// PAGES
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SigUpPage from './pages/sign-up/sig-up.page'
import ExplorePage from './pages/explore/explore.page'
import CategoryDetailsPage from './pages/category-details/category-details.page'

// UTILITS
import { auth, db } from './config/firebase.config'
import { UserContext } from './context/user.context'
import { userConverter } from './converters/firestore.converts'

// COMPONENTS
import Loading from './components/loading/loading.components'
import Cart from './components/cart/cart.components'

const App: FunctionComponent = () => {
  const [isInitialing, setIsInitialing] = useState(true)
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      logoutUser()
      return setIsInitialing(false)
    }

    const isSigningIn = !isAuthenticated && user

    if (isSigningIn) {
      const queryuSnapshot = await getDocs(
        query(
          collection(db, 'users').withConverter(userConverter),
          where('id', '==', user.uid)
        )
      )
      const userFromFirestore = queryuSnapshot.docs[0]?.data()
      loginUser(userFromFirestore)
      return setIsInitialing(false)
    }
    return setIsInitialing(false)
  })

  if (isInitialing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SigUpPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/category/:id' element={<CategoryDetailsPage />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
