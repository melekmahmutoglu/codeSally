import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Username from '../Image/Icon/Username'
import Password from '../Image/Icon/Password'

const LoginText = ({email, passwordd}) => {
    const [text, setText] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View>
            <View style={styles.textinput}>
                <Username style={styles.icon}/>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    style={styles.inputTextName}
                    placeholder={email}
                />
            </View>
            <View style={styles.textinput}>
                <Password style={styles.icon}/>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.inputTextName}
                    placeholder={passwordd}
                />
            </View>
        </View>
    )
}

export default LoginText

const styles = StyleSheet.create({
    textinput: {
        backgroundColor: '#FFF',
        borderRadius: 37,
        display: 'flex',
        height: 70,
        margin: 15,
        marginLeft: 30,
        marginRight: 30,
        padding: 25,
        flexDirection: 'row',
    },
    icon:{
        color: '#3C3C43',
        fontWeight: '600',
        fontSize: 14,
    },
    inputTextName:{
        color: '#3C3C43',
        marginLeft: 15,
        fontSize: 14,
        fontWeight: '400'
    }
})