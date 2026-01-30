import { FunctionComponent, useContext, useEffect } from 'react'

// STYLES
import { Container } from './categories-overview.style'

// UTILITIES
import { CategoryContext } from '../../context/category.context'

// COMPONENTS
import CategoryOverview from '../category-overview/category-overview.componets'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  return (
    <>
      <Container>
        {categories.map((category) => (
          <CategoryOverview key={category.id} category={category} />
        ))}
      </Container>
    </>
  )
}

export default CategoriesOverview
