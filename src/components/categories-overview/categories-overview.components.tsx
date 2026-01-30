import { FunctionComponent, useContext, useEffect } from 'react'

// STYLES
import { Container } from './categories-overview.style'

// UTILITIES
import { CategoryContext } from '../../context/category.context'

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
          <p key={category.id}> {category.displayName} </p>
        ))}
      </Container>
    </>
  )
}

export default CategoriesOverview
