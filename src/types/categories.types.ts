import Product from './product.types'

interface Category {
  id: string
  name: string
  displaName: string
  imageUrl: string
  products: Product[]
}

export default Category
