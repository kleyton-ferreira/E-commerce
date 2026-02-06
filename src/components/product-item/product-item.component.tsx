import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'

// COMPONENTS
import CustomButton from '../custom-button/custom-buttom.components'

// STYLES
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'

// UTILITIES
import Product from '../../types/product.types'
import { CartContext } from '../../context/cart.context'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductoCart } = useContext(CartContext)

  const handleProductToCart = () => {
    addProductoCart(product)
  }

  return (
    <>
      <ProductContainer>
        <ProductImage imageUrl={product.imageUrl}>
          <CustomButton
            startIcon={<BsCartPlus size={18} />}
            onClick={handleProductToCart}
          >
            Adicionar ao carrinho
          </CustomButton>
        </ProductImage>
        <ProductInfo>
          <p> {product.name} </p> <p> R$ {product.price} </p>
        </ProductInfo>
      </ProductContainer>
    </>
  )
}

export default ProductItem
