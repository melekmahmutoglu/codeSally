import {Image, StyleSheet} from 'react-native'
import React from 'react'

const SallyImage = () => {
  return (
    <Image
        style={styles.Sally}
        source={require('../Image/Sallyfirst.png')}
    />
  )
}


export default SallyImage

const styles = StyleSheet.create({
    Sally: {
        width: '100%',
        height: 340,
        alignItems: 'flex-start',
        marginTop: 50
       
        
    }
})