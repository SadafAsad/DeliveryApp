import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'

const PreparingScreen = () => {
  return (
    <SafeAreaView className='bg-[#00ccbb] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require('../assets/orderLoading.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-96 w-96'
      />

      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='my-10 text-white font-bold text-center text-base'
      >
       Waiting for restaurant to accept your order! 
      </Animatable.Text>

      
    </SafeAreaView>
  )
}

export default PreparingScreen