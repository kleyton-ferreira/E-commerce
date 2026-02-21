import {
  createContext,
  FunctionComponent,
  useEffect,
  useMemo,
  useState
} from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface ICartContext {
  isVisible: boolean
  productsTotalPrice: number
  productsCount: number
  products: CartProduct[]
  toggleCart: () => void
  addProductoCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (ProductId: string) => void
}

interface CartContextProps {
  children: string | any
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  productsCount: 0,
  productsTotalPrice: 0,
  toggleCart: () => {},
  addProductoCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {}
})

const CartContextProvider: FunctionComponent<CartContextProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const [products, setProducts] = useState<CartProduct[]>(() => {
    const productsFromLocalStorage = localStorage.getItem('cartProducts')
    if (!productsFromLocalStorage) return []

    try {
      return JSON.parse(productsFromLocalStorage) as CartProduct[]
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }, [products])

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity
    }, 0)
  }, [products])

  const productsCount = useMemo(() => {
    return products.reduce((acc, currentProducts) => {
      return acc + currentProducts.quantity
    }, 0)
  }, [products])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductoCart = (product: Product) => {
    // vamos verificar se o produto estar no carrinho
    const productIsAlreadyIncart = products.some(
      (item) => item.id === product.id
    )

    // se sim => vamos aumentar sua quantidade
    if (productIsAlreadyIncart) {
      return setProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }
    // se nao tiver => vamos adicionalo
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  // FUNÇAO DE REMOVER PRODUTOS NO CARRINHO
  const removeProductFromCart = (productId: string) => {
    setProducts((productsRemove) =>
      productsRemove.filter((remove) => remove.id !== productId)
    )
  }

  // FUNÇAO DE INCREMENTAR PRODUTOS NO CARRINHO
  const increaseProductQuantity = (productId: string) => {
    setProducts((productsInc) =>
      productsInc.map((addProduct) =>
        addProduct.id === productId
          ? { ...addProduct, quantity: addProduct.quantity + 1 }
          : addProduct
      )
    )
  }

  // FUNÇAO DE DECREMENTAR PRODUTOS NO CARRINHO
  const decreaseProductQuantity = (productId: string) => {
    setProducts((productsDec) =>
      productsDec
        .map((decProducts) =>
          decProducts.id === productId
            ? { ...decProducts, quantity: decProducts.quantity - 1 }
            : decProducts
        )
        .filter((productFilter) => productFilter.quantity > 0)
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productsTotalPrice,
        toggleCart,
        addProductoCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        productsCount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
