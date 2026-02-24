import { FunctionComponent, useContext, useState } from 'react'
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
import axios from 'axios'
import Loading from '../loading/loading.components'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)

  const habndleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-checkout-session`,
        {
          products
        }
      )
      window.location.href = data.url
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loading />}
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

            <CustomButton
              startIcon={<BsBagCheck />}
              onClick={habndleFinishPurchaseClick}
            >
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
