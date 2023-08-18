import { StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import SallyImage from '../Component/SallyImage'
import Welcome from '../Component/Welcome'
import LoginText from '../Component/LoginText'
import Buttons from '../Component/Buttons'


const LoginScreen = ({ navigation }) => {
  const welcome = 'Welcome Back!';
  const logIn = 'Please, Log In.';
  const continueName = 'Continue >';
  const createAccount = 'Create an Account';
  const email = 'johnsondoe@nomail.com';
  const password = '*************';

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <LinearGradient
      colors={['#e5b2ca', '#cd82de']}
      style={styles.linear}>
      <SallyImage />
      <Welcome welcome={welcome} logIn={logIn} />
      <LoginText email={email} passwordd={password} />
      <Buttons continueName={continueName} createAccount={createAccount} buttonColor={'#78258b'} onPress={goToSignUp} />
    </LinearGradient>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  }
})