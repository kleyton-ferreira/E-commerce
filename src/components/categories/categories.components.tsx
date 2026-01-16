import { useEffect, useState } from 'react'
import axios from 'axios'

// STYLED COMPONENTS
import { CategoriesContainer, CategoriesContent } from './categories.styles'

// COMPONENTS
import CategoriesItems from '../category-item/category-item-components'

// UTILITIES
import Category from '../../types/categories.types'
import env from '../../config/env.config'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
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
