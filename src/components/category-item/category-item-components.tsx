import { FunctionComponent } from 'react'

// UTILITIES
import Category from '../../types/categories.types'

// STYLED COMPONENTS
import { CategoryItemContainer, CategoryName } from './category-item.style'

interface CategoryItemProps {
  category: Category
}

const CategoriesItems: FunctionComponent<CategoryItemProps> = ({
  category
}) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
        <p> {category.name} </p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoriesItems
