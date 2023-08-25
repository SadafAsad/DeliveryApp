import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import client from '../sanity'

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    client.fetch(`
      *[_type == 'featured' && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        }
      }[0]
    `, {id}).then(data => {
      setRestaurants(data?.restaurants)
    })
  }, [])

  console.log('restaurants: ', restaurants)

  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color={'#00ccbb'}/>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        className='pt-4'
      >
        {/* Restaurant Cards */}
        <RestaurantCards 
            id={123}
            imageUrl='https://links.papareact.com/gn7'
            title='Yo! Sushi'
            rating={4.5}
            genre='Japanese'
            address='123 Main St'
            short_description='This is a test description'
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCards 
            id={123}
            imageUrl='https://links.papareact.com/gn7'
            title='Yo! Sushi'
            rating={4.5}
            genre='Japanese'
            address='123 Main St'
            short_description='This is a test description'
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCards 
            id={123}
            imageUrl='https://links.papareact.com/gn7'
            title='Yo! Sushi'
            rating={4.5}
            genre='Japanese'
            address='123 Main St'
            short_description='This is a test description'
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCards 
            id={123}
            imageUrl='https://links.papareact.com/gn7'
            title='Yo! Sushi'
            rating={4.5}
            genre='Japanese'
            address='123 Main St'
            short_description='This is a test description'
            dishes={[]}
            long={20}
            lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow