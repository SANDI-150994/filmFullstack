import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import RegisterScreen from './src/screens/RegisterScreen'
import LoginScreen from './src/screens/LoginScren'
import SplashScreen from './src/screens/SplashScreen'
import Movie from './src/screens/Movie'
import Details from './src/screens/Details'

const Stack = createStackNavigator()

const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name ="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name ="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name ="RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name ="Movie" component ={Movie}/>
        <Stack.Screen name ="Detail" component ={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App