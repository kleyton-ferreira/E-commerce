import { FunctionComponent } from 'react'
import Category from '../../types/categories.types'

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
        <ProductsContainer></ProductsContainer>
      </CategoryContainer>
    </>
  )
}

export default CategoryOverview
