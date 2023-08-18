import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'react-native-svg'
import SallyImage from '../Component/SallyImage'
import Welcome from '../Component/Welcome'
import LoginText from '../Component/LoginText'
import Buttons from '../Component/Buttons'


const LoginScreen = () => {
  return (
      <LinearGradient
        colors={['#e5b2ca', '#cd82de']}
       style={styles.linear}>
      <SallyImage />
      <Welcome />
      <LoginText />
      <Buttons />
      </LinearGradient>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linear: {
   flex:1,
       
  }
  
})