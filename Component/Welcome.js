import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = ({welcome, logIn}) => {
  return (
   <View>
    <Text style={styles.header}>{welcome}</Text>
    <Text style={styles.title}>{logIn}</Text>
   </View>
 );
}

export default Welcome

const styles = StyleSheet.create({
    header:{
        color: '#FFFFFFBF',
        textAlign: 'center',
        fontSize: 22,
        fontStyle:'normal',
        fontWeight: '600',
        
    },
    title:{
        textAlign: 'center',
        color: '#FFF',
        fontSize: 34,
        fontWeight: '800',
        fontStyle:'normal',
        
    }
})