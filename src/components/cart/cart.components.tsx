import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'

// UTILITIES
import { CartContext } from '../../context/cart.context'

// COMPONENTS
import CustomButton from '../custom-button/custom-buttom.components'
import CartItem from '../cart-item/cart-item.component'

// STYLES
import {
  CartContainer,
  CartEscapeArea,
  CartContent,
  CartTitle,
  CartTotal
} from './cart.styles'

const Cart: FunctionComponent = () => {
  const { isVisible, products, toggleCart, productsTotalPrice, productsCount } =
    useContext(CartContext)
  return (
    <>
      <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Adicione produtos.</CartTitle>

          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}

          {productsCount > 0 && (
            <CartTotal>Total: R${productsTotalPrice} </CartTotal>
          )}

          {productsCount > 0 && (
            <CustomButton startIcon={<BsCartCheck />}>
              Ir para o Checkout
            </CustomButton>
          )}

          {productsCount === 0 && <p>Seu carrinho está vazio! </p>}
        </CartContent>
      </CartContainer>
    </>
  )
}

export default Cart
