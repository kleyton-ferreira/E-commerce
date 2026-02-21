import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// UTILITIES
import { UserContext } from '../../context/user.context'

// COMPONENTS
import Loading from '../loading/loading.components'
import Header from '../header/header.components'

interface ParameterChildren {
  children: string | any
}

const AuthenticationGuard: FunctionComponent<ParameterChildren> = ({
  children
}) => {
  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message='Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes...' />
      </>
    )
  }

  return <> {children} </>
}

export default AuthenticationGuard
