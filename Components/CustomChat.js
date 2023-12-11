import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NavigationNames from '../Navigations/NavigationNames';
const CustomChat = ({img, name,}) => {
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
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.text}>
        You: Hallo Dania
        </Text>
      </View>
      <View>
      <Text style={styles.text1}>
      | senior maid
      </Text>
      </View>
      </View>
      <Text style={styles.time}>
      9:03 AM
      </Text>
    </TouchableOpacity>
  )
}

export default CustomChat

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
    marginLeft:15
  },
  container:{
    width:359,
    height:90,
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
  }
})