import { InputErrorMessageContainer } from './input-error-message.styles'

import { FunctionComponent } from 'react'

interface InputErrorMessageProps {
  children: string
}

const InputErrorMessage: FunctionComponent<InputErrorMessageProps> = ({
  children
}) => {
  return <InputErrorMessageContainer> {children} </InputErrorMessageContainer>
}

export default InputErrorMessage
