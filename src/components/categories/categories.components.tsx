import { useEffect, useState } from 'react'

import { getDocs, collection } from 'firebase/firestore'

// STYLED COMPONENTS
import { CategoriesContainer, CategoriesContent } from './categories.styles'

// COMPONENTS
import CategoriesItems from '../category-item/category-item-components'

// UTILITIES
import Category from '../../types/categories.types'
import { db } from '../../config/firebase.config'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const catgoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(collection(db, 'categories'))
      querySnapshot.forEach((doc: any) => {
        catgoriesFromFirestore.push(doc.data())
      })
      setCategories(catgoriesFromFirestore)
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
