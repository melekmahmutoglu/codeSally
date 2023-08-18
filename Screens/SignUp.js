import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import SallySecondImage from '../Component/SallySecondImage'
import Welcome from '../Component/Welcome'
import LoginText from '../Component/LoginText'
import Buttons from '../Component/Buttons'

const SignUp = ({navigation}) => {
  const hi = 'Hi, there!'
  const started = 'Let\'s Get Started'
  const username = 'Username'
  const password = 'Password'
  const continueName = 'Create an Account'
  const logIn = 'Log In'


  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <LinearGradient
      style={styles.background}
      colors={['#9183de', '#a094e3']}>
      <SallySecondImage />
      <Welcome welcome={hi} logIn={started} />
      <LoginText email={username} passwordd={password} />
      <Buttons continueName={continueName} createAccount={logIn} buttonColor={'#52439a'} onPress={goToLogin}
      />
    </LinearGradient>
  )
}

export default SignUp

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
})