import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBack = ({onPress, bgcolor, tintColor}) => {
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:bgcolor}]} activeOpacity={0.6}
    onPress={onPress}>
      <Image source={require('../Assets/Back.png')}
        style={[styles.img, {tintColor:tintColor}]}
      />
    </TouchableOpacity>
  )
}

export default CustomBack

const styles = StyleSheet.create({
    container:{
        width:20,
        height:20,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:bgcolor,
        // backgroundColor:'white',
        marginLeft:20,
        marginTop:30
        
    },
    img:{
        width:11,
        height:11
    }
})