import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NavigationNames from '../Navigations/NavigationNames';
const CustomHirring = ({img, name}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} 
    onPress={()=>{
      navigation.navigate(NavigationNames.Chat)
    }}>
    <View style={{flexDirection:'row'}}>
       <View>
        <Image source={img}
          style={styles.img}
        />
      </View>
      <View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.text1}>
      | Request For Cook
      </Text>
      </View>
        <Text style={styles.text}>
        Massage: Hallo Dania am required 
        </Text>
        <Text style={styles.text}>
         perfectional cook for House.
        </Text>
      </View>
      
      </View>
      <Text style={styles.time}>
      9:03 AM
      </Text>
      <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={()=>{
        navigation.navigate(NavigationNames.Hirring_Details)
      }}>
        <Text style={styles.text2}>
        View more....
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default CustomHirring

const styles = StyleSheet.create({
    img:{
        width:63,
        height:62,
        borderRadius:300,
        // margin:10
      },
      name:{
        fontSize:16,
        color:'black',
        marginTop:10,
        marginLeft:10
      },
      text:{
        fontSize:14,
        color:'#D9D9D9',
        marginLeft:10
      },
      text1:{
        fontSize:16,
        color:'#7B8387',
        marginTop:10,
        marginLeft:25
      },
      container:{
        width:359,
        height:119,
        backgroundColor:'#FFFFFF',
        borderRadius:12,
        alignSelf:'center',
        padding:10,
        margin:5
      },
      time:{
        fontSize:12,
        color:'#7B8387',
        textAlign:'right'
      },
      text2:{
        fontSize:12,
        color:'white'
      },
      btn:{
        width:78,
        height:19,
        backgroundColor:'#028090',
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center'
      }
})