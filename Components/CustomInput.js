import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({label,secureText, placeholder }) => {
  return (
    <View style={{marginVertical:5}}>
        <Text style={styles.text}>
            {label}
        </Text>
      <TextInput placeholder={placeholder} placeholderTextColor={'#B8B3B3'} 
     
      secureTextEntry={secureText}
      style={styles.input}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input:{
        width:300,
        height:46,
        borderWidth:1,
        borderColor:'#7B8387',
        alignSelf:'center',
        borderRadius:10,
        paddingLeft:15,
        color:'black'
    },
    text:{
        color:'#191A1C',
        fontSize:10,
        marginLeft:60,
        marginBottom:-7,
        backgroundColor:'#FFFFFF',
        width:60,
        zIndex:1
    }
})