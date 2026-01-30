import { useContext, useEffect } from 'react'

// STYLED COMPONENTS
import { CategoriesContainer, CategoriesContent } from './categories.styles'

// COMPONENTS
import CategoriesItems from '../category-item/category-item-components'

// UTILITIES
import { CategoryContext } from '../../context/category.context'
import Loading from '../loading/loading.components'

const Categories = () => {
  const { categories, fetchCategories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoriesItems category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
