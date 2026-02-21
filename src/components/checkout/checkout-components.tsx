import { FunctionComponent, useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { BsBagCheck } from 'react-icons/bs'

import CustomButton from '../custom-button/custom-buttom.components'

import CartItem from '../cart-item/cart-item.component'

import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout.style'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <>
      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>

        {products.length > 0 ? (
          <>
            <CheckoutProducts>
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </CheckoutProducts>
            <CheckoutTotal>Total: R${productsTotalPrice} </CheckoutTotal>

            <CustomButton startIcon={<BsBagCheck />}>
              Finalizar Compras
            </CustomButton>
          </>
        ) : (
          <p>Seu carrinho está vazio!</p>
        )}
      </CheckoutContainer>
    </>
  )
}

export default Checkout
