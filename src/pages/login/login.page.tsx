import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'

import { useEffect, useContext } from 'react'

// COMPONENTS
import Header from '../../components/header/header.components'
import CustomButton from '../../components/custom-button/custom-buttom.components'
import CustomInput from '../../components/custom-input/custom-input-components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'

// STYLE
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

// UTILITIES
import { auth, db, provider } from '../../config/firebase.config'
import { UserContext } from '../../context/user.context'
import { useNavigate } from 'react-router-dom'

interface LoginPageForm {
  password: string
  email: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginPageForm>()

  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleSubmitPress = async (data: LoginPageForm) => {
    try {
      const UserCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      console.log({ UserCredential })
    } catch (error) {
      const _error = error as AuthError
      console.log(error)
      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return setError('password', { type: 'mismatch' })
      }
    }
  }

  const handleSignInWithGooglePress = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, provider)
      console.log({ userCredentials })

      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredentials.user.uid)
        )
      )

      const user = querySnapshot.docs[0]?.data()
      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const lastName = userCredentials.user.displayName?.split(' ')[1]

        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          providers: 'google'
        })
      }
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
          <CustomButton
            startIcon={<BsGoogle size={18} />}
            onClick={handleSignInWithGooglePress}
          >
            Entrar com o google
          </CustomButton>
          <LoginSubtitle>ou entre com seu e-mail </LoginSubtitle>

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors.email}
              placeholder='Digite seu e-mail'
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O email e obrigatória.</InputErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors.password}
              placeholder='Digite seu Senha'
              type='password'
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}

            {errors?.password?.type === 'mismatch' && (
              <InputErrorMessage>Insira uma senha valida.</InputErrorMessage>
            )}
          </LoginInputContainer>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Entar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
