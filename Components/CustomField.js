import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CustomField = ({text, onPress}) => {
  return (
    <View>
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
        <View style={styles.container1}>
            <Image source={require('../Assets/Profile.png')}
                style={styles.img}
            />
        </View>
        <Text style={styles.text}>
            {text}
        </Text>
    </TouchableOpacity>
    <View style={styles.line}>

    </View>
    </View>
  )
}

export default CustomField

const styles = StyleSheet.create({
    container1:{
        width:40,
        height:40,
        borderRadius:40,
        borderWidth:1,
        borderColor:'black',
        marginLeft:40,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        width:399,
        height:56,
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        color:'black',
        marginLeft:20
    },
    img:{
        width:20,
        height:20
    },
    line:{
        width:399,
        height:1,
        backgroundColor:'#26344F0F'
    }
})