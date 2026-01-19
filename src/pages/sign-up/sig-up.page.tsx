import { FiLogIn } from 'react-icons/fi'
import validator from 'validator'
import { useForm } from 'react-hook-form'

// COMPONENTS
import CustomButton from '../../components/custom-button/custom-buttom.components'
import CustomInput from '../../components/custom-input/custom-input-components'
import Header from '../../components/header/header.components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'

// STYLES
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up-style'

interface SignUpForm {
  name: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SigUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<SignUpForm>()

  const watchPassword = watch('password')

  const handleSubmitSignUpPage = (data: SignUpForm) => {
    console.log({ data })
  }

  console.log({ errors })

  return (
    <>
      <Header />
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua Conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors.name}
              placeholder='Digite seu nome'
              {...register('name', { required: true })}
            />

            {errors?.name?.type === 'required' && (
              <InputErrorMessage>O nome e obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors.lastName}
              placeholder='Digite seu Sobrenome'
              {...register('lastName', { required: true })}
            />

            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>O sobrenome e obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
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

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira um e-mail válido.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors.password}
              placeholder='Digite sua senha'
              type='password'
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmação de Senha</p>
            <CustomInput
              hasError={!!errors.passwordConfirmation}
              placeholder='Digite sua senha'
              type='password'
              {...register('passwordConfirmation', {
                required: true,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />

            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>
                Confirmação de Senha é obrigatória.
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>
                Confirmação de Senha precisa ser igual a senha
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitSignUpPage)()}
          >
            Entar
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SigUpPage
