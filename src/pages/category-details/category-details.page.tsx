import { FunctionComponent } from 'react'

// COMPONENTS
import Header from '../../components/header/header.components'
import CategoryDetails from '../../components/category-details/category-details.components'
import { useParams } from 'react-router-dom'

const CategoryDetailsPage: FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  )
}

export default CategoryDetailsPage
