import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomAds = ({img, text, name}) => {
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
    <View>
      <Image source={img}
        style={styles.img}
      />
       <TouchableOpacity style={styles.container1} activeOpacity={0.6}>
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
     
      </View>
      <View>
      <Text style={styles.name}>
      {name}
      {/* Akif Ali */}
      </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.text}>
        Service :
        </Text>
        <View>
        <Text style={styles.text1}>
        House cleaner, Cook, baby 
        </Text>
        <Text style={styles.text1}>
         sitter, All in one
        </Text>
        </View>
      </View>
      <View style={{flexDirection:'row', marginTop:20}}>
        <Text style={styles.text}>
        Timming of working :
        </Text>
        <Text style={styles.text1}>
        10 pm to 10 am
        </Text>
      </View>
      <View >
       
        <View style={{flexDirection:'row', marginTop:40, marginLeft:20}}>
        <Image source={require('../Assets/Views.png')}
            style={styles.Views}
        />
        <Text style={styles.text2}>
        view:1
        </Text>
        <Image source={require('../Assets/Likes.png')}
            style={styles.Views}
        />
        <Text style={styles.text2}>
        Likes:3
        </Text>
        <Image source={require('../Assets/Chats.png')}
            style={styles.Views}
        />
        <Text style={styles.text2}>
        Chats:4
        </Text>
            
        </View>
      </View>
      </View>
      </View>
    </View>
  )
}

export default CustomAds

const styles = StyleSheet.create({
    img:{
        width:135,
        height:165,
        alignSelf:'center',
       borderRadius:10
    },
    name:{
        fontSize:18,
        color:'black',
        marginVertical:10,
        marginLeft:7
    },
    text:{
        fontSize:12,
        color:'black',
        marginLeft:7
    },
    text1:{
        fontSize:11,
        color:'#7B8387',
    
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
        width:361,
        height:222,
        backgroundColor:'#FFFFFF',
        shadowColor:'#00000040',
        borderRadius:12,
        margin:5,
       padding:10
    },
    Views:{
        width:14,
        height:12,
        marginHorizontal:5
    },
    text2:{
        fontSize:6,
        color:'#028090',
        marginTop:2
    }
})