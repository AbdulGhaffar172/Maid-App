import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomCate = ({text, img, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}
    style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:30, marginTop:10}}
    activeOpacity={0.6}>
    <View  style={{flexDirection:'row'}}>
    <View>
      <Image source={img}
        style={styles.img}
      />
      </View>
      <View >
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text1}>Up to 30 add are here</Text>
      </View>
      </View>
      <Image source={require('../Assets/btn.png')}
        style={styles.btn}
      />
    </TouchableOpacity>
  )
}

export default CustomCate

const styles = StyleSheet.create({
    img:{
        width:50,
        height:50
    },
    text:{
        fontSize:16,
        color:'black',
        marginTop:5,
        marginLeft:5
    },
    text1:{
        fontSize:10,
        color:'black',
        marginLeft:5
    },
    btn:{
        width:8,
        height:18,
        tintColor:'black',
        marginTop:15
    }
})