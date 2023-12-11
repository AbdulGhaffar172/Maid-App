import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const CustomSelect = ({text}) => {
  const [isColor, SetColor] = useState(true)
  return (
    <TouchableOpacity  activeOpacity={0.6}
    onPress={()=>{
        SetColor(!isColor); }} 
         style={[styles.container, 
       
         isColor
          ? {backgroundColor: '#F5F5F5'}
          : {backgroundColor: '#028090'},
         ]}>
      <Text
      style={[
          {fontSize: 10,
          },
          isColor
           ? {color: '#7B8387'}
           : {color: '#FFFFFF'},
        ]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomSelect

const styles = StyleSheet.create({
    container:{
        width:60,
        height:25,
        borderRadius:4,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    }
})


