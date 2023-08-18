import { StyleSheet, Text, View, Button, TouchableOpacity,} from 'react-native'
import React from 'react'


const Buttons = () => {
    const continueName = 'Continue >';
    const dashed = '----------------------- Or -----------------------'
  return (
   <View>
     <TouchableOpacity
     style={styles.buttonContainer}
     onPress={()=>{}}>
        <Text style={styles.continue}>{continueName}</Text>
     </TouchableOpacity>
    <Text style={styles.dashed}>{dashed}</Text>
     <TouchableOpacity
     style={styles.buttonContainerSign}
     onPress={() => {}}>
        <Text style={styles.continue}>Create an Account</Text>
     </TouchableOpacity>
   </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    buttonContainer:{
        width: 342,
        height: 70,
        backgroundColor: '#78258b',
        borderRadius: 37,
        marginLeft: 40,
        justifyContent: 'center',
        alignContent: 'center'
        
    },
    continue:{
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: '700'

        
    }, 
    dashed:{
        textAlign: 'center',
        margin: 15,
        color: '#FFF',
        opacity:  0.5,
        fontSize: 15
    },
    buttonContainerSign:{
        width: 342,
        height: 70,
        borderRadius: 37,
        marginLeft: 40,
        justifyContent: 'center',
        alignContent: 'center',
        shadowColor: '#78258b',
        backgroundColor: '#FFFFFF47'
    }
})