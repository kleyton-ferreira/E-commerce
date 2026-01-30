import { createContext, FunctionComponent, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'

// UTILITIES
import { db } from '../config/firebase.config'
import { categoryConverter } from '../converters/firestore.converts'
import Category from '../types/categories.types'

interface contextProviderCategory {
  children: any
}

interface ICategoryContext {
  categories: Category[]
  fetchCategories: () => Promise<void>
  isLoading: boolean
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  isLoading: false,
  fetchCategories: () => Promise.resolve()
})

const CategoryContextProvider: FunctionComponent<contextProviderCategory> = ({
  children
}) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)

      const catgoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        catgoriesFromFirestore.push(doc.data())
      })
      console.log({ catgoriesFromFirestore })
      setCategories(catgoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
