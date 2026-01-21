import Category from '../types/categories.types'

import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'

export const categoryConverter = {
  toFirestore(category: Category): DocumentData {
    return { ...category }
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Category {
    const data = snapshot.data(options)

    return {
      id: data.id,
      displaName: data.displaName,
      imageUrl: data.imageUrl,
      name: data.name,
      products: data.products
    }
  }
}
