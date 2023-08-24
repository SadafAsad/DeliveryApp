import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Categories = () => {
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
        <Text>Categories</Text>
    </ScrollView>
  )
}

export default Categories