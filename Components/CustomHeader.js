import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomBack from './CustomBack'
import NavigationNames from '../Navigations/NavigationNames'
import { useNavigation } from '@react-navigation/native';
const CustomHeader = ({text}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <CustomBack bgcolor={'white'} tintColor={'#028090'} onPress={()=>
       navigation.navigate(NavigationNames.My_Account) }/>
        <Text style={styles.text}>
            {text}
        </Text>
      </View>
      <View>
        <Image source={require('../Assets/User.png')}
            style={styles.img}
        />
      </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'white',
        marginTop:24,
        marginLeft:20
    },
    container:{
        width:393,
        height:147,
        backgroundColor:'#028090',
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    img:{
        width:58,
        height:60,
        marginTop:18,
        marginRight:30
    }
})