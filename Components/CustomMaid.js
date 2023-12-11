import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import NavigationNames from '../Navigations/NavigationNames'
import { useNavigation } from '@react-navigation/native';
const CustomMaid = ({img, text}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} >
      <ImageBackground source={img}
      style={styles.img}>
            <TouchableOpacity style={styles.favorite} activeOpacity={0.6}>
                <Image source={require('../Assets/Heart.png')}
                    style={styles.heart}
                />
            </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.text}>{text}</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>{
        navigation.navigate(NavigationNames.Maid_Details)
    }}>
            <Text style={styles.details}>
            view details
            </Text>
        </TouchableOpacity>
        <View>
            <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                <Text style={styles.rating}>
                    4.3
                </Text>
                <Image source={require('../Assets/Star.png')}
                    style={styles.star}
                />
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.line1}>

                </View>
                <View style={styles.line2}>

                </View>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CustomMaid

const styles = StyleSheet.create({
    img:{
        width:268,
        height:174
    }, text:{
        fontSize:18,
        color:'black',
        marginLeft:10
    },
    details:{
        fontSize:14,
        color:'#028090',
        marginLeft:10
    },
    star:{
        width:10,
        height:10,
        marginRight:10,
        marginTop:3
    },
    rating:{
        fontSize:12,
        color:'black'
    },
    line1:{
        width:47,
        height:4,
        backgroundColor:'#028090'
    },
    line2:{
        width:60,
        height:4,
        backgroundColor:'#D9D9D9',
        marginRight:10
    },
    heart:{
        width:18,
        height:15,
        tintColor:'white'
    },
    favorite:{
        width:30,
        height:30,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#028090',
        alignSelf:'flex-end',
        marginRight:10,
        marginTop:130   
    },
    container:{
        width:268,
        height:246,
        borderRadius:12,
        elevation:5,
        margin:10,
        backgroundColor:'white',
       
    }
})