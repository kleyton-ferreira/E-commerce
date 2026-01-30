import { FunctionComponent, useContext, useEffect } from 'react'

// STYLES
import { Container } from './categories-overview.style'

// UTILITIES
import { CategoryContext } from '../../context/category.context'

// COMPONENTS
import CategoryOverview from '../category-overview/category-overview.componets'
import Loading from '../loading/loading.components'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  if (isLoading) return <Loading />

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
