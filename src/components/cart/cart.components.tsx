import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'

// UTILITIES
import { CartContext } from '../../context/cart.context'

// COMPONENTS
import CustomButton from '../custom-button/custom-buttom.components'

// STYLES
import {
  CartContainer,
  CartEscapeArea,
  CartContent,
  CartTitle,
  CartTotal
} from './cart.styles'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)
  return (
    <>
      <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Seu Carrinho</CartTitle>
          {/* AQUI VAI SER RENDERIZADO O PRODUTOS */}
          <CartTotal>Total: R$1472</CartTotal>
          <CustomButton startIcon={<BsCartCheck />}>
            Ir para o Checkout
          </CustomButton>
        </CartContent>
      </CartContainer>
    </>
  )
}

export default Cart
