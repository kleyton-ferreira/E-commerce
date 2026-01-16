import { FunctionComponent } from 'react'

// UTILITIES
import Category from '../../types/categories.types'

// STYLES
import './category-item-styles.css'

interface CategoryItemProps {
  category: Category
}

const CategoriesItems: FunctionComponent<CategoryItemProps> = ({
  category
}) => {
  return (
    <div
      className='category-item-container'
      style={{ backgroundImage: category.imageUrl }}
    >
      <div className='category-name'>
        <p>{category.displaName}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoriesItems
