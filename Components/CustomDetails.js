import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NavigationNames from '../Navigations/NavigationNames';
const CustomDetails = ({img, name }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={img}
        style={styles.img}
      />
      <Text style={styles.name}>
      {name}
      </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.text}>
        Service :
        </Text>
        <Text style={styles.text1}>
        House cleaner, Cook, baby sitter. 
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.text}>
        Experties :
        </Text>
        <Text style={styles.text1}>
        Cooking & Baby sitter.
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.container1} activeOpacity={0.6}
        onPress={()=>{
            navigation.navigate(NavigationNames.Maid_Details)
        }}>
            <Text>
                Details
            </Text>
        </TouchableOpacity>
        <View style={{marginTop:10}}>
            <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                <Text style={styles.rating}>
                    4.3
                </Text>
                {/* <Image source={require('../Assets/Star.png')}
                    style={styles.star}
                /> */}
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.line1}>

                </View>
                <View style={styles.line2}>

                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default CustomDetails

const styles = StyleSheet.create({
    img:{
        width:195,
        height:120,
        alignSelf:'center',
        // marginTop:5
    },
    name:{
        fontSize:16,
        color:'#028090',
        fontWeight:'bold',
        marginLeft:7
    },
    text:{
        fontSize:10,
        color:'black',
        marginLeft:7
    },
    text1:{
        fontSize:8,
        color:'#7B8387'
    },
    // star:{
    //     width:10,
    //     height:10,
    //     marginRight:10,
    //     marginTop:3
    // },
    rating:{
        fontSize:12,
        color:'black',
        marginRight:20,
        
    },
    line1:{
        width:20,
        height:2,
        backgroundColor:'#028090',
        marginLeft:20
    },
    line2:{
        width:34,
        height:2,
        backgroundColor:'#D9D9D9',
        marginRight:10
    },
    container1:{
        width:81,
        height:25,
        backgroundColor:'#028090',
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:7,
        marginVertical:10
    },
    container:{
        width:175,
        height:222,
        backgroundColor:'#FFFFFF',
        shadowColor:'#00000040',
        borderRadius:12,
        margin:5,
       
    }
})