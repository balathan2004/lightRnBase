import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './Router'

type Props = {}

const NavigationRoot = (props: Props) => {
  return (
   <NavigationContainer>
    <Router/>
   </NavigationContainer>
  )
}

export default NavigationRoot