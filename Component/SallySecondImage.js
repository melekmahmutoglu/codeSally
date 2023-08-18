import {Image, StyleSheet} from 'react-native'
import React from 'react'


const SallySecondImage = () => {
    return (
      <Image
          style={styles.Sally}
          source={require('../Image/Sallysecond.png')}
      />
    )
  }

export default SallySecondImage

const styles = StyleSheet.create({
    Sally: {
        width: 391,
        height: 391,
        alignItems: 'flex-start',
        marginTop: 50
       
        
    }
})