import { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
  addProductoCart: (product: Product) => void
}

interface CartContextProps {
  children: string | any
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductoCart: () => {}
})

const CartContextProvider: FunctionComponent<CartContextProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductoCart = (product: Product) => {
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductoCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
