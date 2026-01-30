import { FunctionComponent } from 'react'

// COMPONENTES
import Category from '../../types/categories.types'
import ProductItem from '../product-item/product-item.component'

// STYLES
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.styles'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <>
      <CategoryContainer>
        <CategoryTitle> {category.displayName} </CategoryTitle>
        <ProductsContainer>
          {category.products.slice(0, 4).map((products) => (
            <ProductItem key={products.id} product={products} />
          ))}
        </ProductsContainer>
      </CategoryContainer>
    </>
  )
}

export default CategoryOverview
