import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

// COMPONENTS
import Header from '../../components/header/header.components'
import CustomButton from '../../components/custom-button/custom-buttom.components'
import CustomInput from '../../components/custom-input/custom-input-components'

// STYLE
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
          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o google
          </CustomButton>
          <LoginSubtitle>ou entre com seu e-mail </LoginSubtitle>
          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput placeholder='Digite seu e-mail' />
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput placeholder='Digite seu Senha' />
          </LoginInputContainer>
          <CustomButton startIcon={<FiLogIn size={18} />}>Entar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
