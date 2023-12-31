import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingScreen = () => {
    const navigation = useNavigation()

    // Mocking the loading order
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 4000)
    }, [])
    
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

            {/* <Progress.Circle size={60} indeterminate={true} color='white' /> */}
        </SafeAreaView>
    )
}

export default PreparingScreen