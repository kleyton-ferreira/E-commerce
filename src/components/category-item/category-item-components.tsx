import { FunctionComponent } from 'react'

// UTILITIES
import Category from '../../types/categories.types'

// STYLED COMPONENTS
import { CategoryitemContainer, CategoryName } from './category-item.style'

interface CategoryItemProps {
  category: Category
}

const CategoriesItems: FunctionComponent<CategoryItemProps> = ({
  category
}) => {
  return (
    <CategoryitemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displaName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryitemContainer>
  )
}

export default CategoriesItems
