import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createNativeStackNavigator();

const RootPage = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
                <Stack.Screen name='Login' component={LoginScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootPage

