import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client from '../sanity'
import { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == 'category']`)
    .then((data) => {
      setCategories(data)
    })
  }, [])

  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
    >
        {/* Category Card */}
        {categories?.map((category) => (
          <CategoryCard 
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name} />
        ))}
    </ScrollView>
  )
}

export default Categories