import Header from '../../components/header/header.components'
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
          {/* BUTTON */}
          <LoginSubtitle>ou entre com seu e-mail </LoginSubtitle>
          <LoginInputContainer>{/* EMAIL & INPUT */}</LoginInputContainer>
          <LoginInputContainer>{/* PASSWORD INPUT */}</LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
