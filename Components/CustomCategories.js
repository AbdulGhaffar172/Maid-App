import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomCategories = ({img, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}
    onPress={onPress}>
      <Image source={img}
        style={styles.img}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomCategories

const styles = StyleSheet.create({
    img:{
        width:48,
        height:48
    },
    text:{
        fontSize:10,
        color:'black',
        marginTop:10,
        marginBottom:20,
        textAlign:'center'
    },
    container:{
        margin:20,
        marginLeft:23,
        
    }
})