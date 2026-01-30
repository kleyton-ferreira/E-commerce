import { FunctionComponent } from 'react'

// UTILITIES
import Category from '../../types/categories.types'

// STYLED COMPONENTS
import { CategoryItemContainer, CategoryName } from './category-item.style'
import { useNavigate } from 'react-router-dom'

interface CategoryItemProps {
  category: Category
}

const CategoriesItems: FunctionComponent<CategoryItemProps> = ({
  category
}) => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
        <p> {category.name} </p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoriesItems
