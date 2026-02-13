import { FunctionComponent, useContext } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

// UTILITIES
import CartProduct from '../../types/cart.types'

// STYLED
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart.item.styles'
import { CartContext } from '../../context/cart.context'

interface CartItemProps {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const { removeProductFromCart, increaseProductQuantity } =
    useContext(CartContext)

  const handleRemoveClick = () => {
    removeProductFromCart(product.id)
  }

  const handleIncClick = () => {
    increaseProductQuantity(product.id)
  }

  return (
    <>
      <CartItemContainer>
        <CartItemImage imageUrl={product.imageUrl} />
        <CartItemInfo>
          <p> {product.name} </p>
          <p> R$ {product.price} </p>
          <CartItemQuantity>
            <AiOutlineMinus size={20} />
            <p> {product.quantity} </p>
            <AiOutlinePlus onClick={handleIncClick} size={20} />
          </CartItemQuantity>
        </CartItemInfo>
        <RemoveButton onClick={handleRemoveClick}>
          <AiOutlineClose size={25} />
        </RemoveButton>
      </CartItemContainer>
    </>
  )
}

export default CartItem
