import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'

// COMPONENTS
import Header from '../header/header.components'
import CustomButton from '../custom-button/custom-buttom.components'

// UTILITIES
import Colors from '../../theme/theme.colors'
import { CartContext } from '../../context/cart.context'

// STYLES
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './payment-comfirmation.style'

const PaymenConfirmationtPage: FunctionComponent = () => {
  const { clearProducts } = useContext(CartContext)

  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled')

  const handleGoToHomePageClick = () => {
    navigate('/')
  }

  useEffect(() => {
    if (status === 'true') {
      clearProducts()
    }
  }, [status])

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso!</p>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao Finalizar sua Compra. Por favor, Tente
                novamente!
              </p>
            </>
          )}

          <CustomButton
            startIcon={<AiOutlineHome size={16} />}
            onClick={handleGoToHomePageClick}
          >
            Ir para a Página Inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymenConfirmationtPage
