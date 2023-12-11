import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Custombtn = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Custombtn

const styles = StyleSheet.create({
    container:{
        width:300,
        height:50,
        backgroundColor:'#028090',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginVertical:10
    },
    text:{
        fontSize:20,
        color:'#FFFFFF'
    }
})