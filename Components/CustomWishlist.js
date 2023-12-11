import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomSelect from './CustomSelect'
import { useNavigation } from '@react-navigation/native';
import NavigationNames from '../Navigations/NavigationNames';
const CustomWishlist = () => {
    const navigation = useNavigation();
  return (
   
       <View style={styles.container}>
       <View style={{flexDirection:'row'}}>
        <View>
            <ImageBackground source={require('../Assets/Maid.png')}
                style={styles.maid}
            >
                
            </ImageBackground>

        </View>
        <View>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.text3}>
            Dania Emaan
            </Text>
            <TouchableOpacity style={styles.favorite} activeOpacity={0.6}>
                <Image source={require('../Assets/Heart.png')} 
                    style={styles.heart}
                />
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text1}>
                working since :
                </Text>
                <Text style={styles.text2}>
                12 years
                </Text>
            </View>
            <Text style={styles.text3}>
                Skills
            </Text>
            <View style={{flexDirection:'row', flexWrap:'wrap', marginRight:150}} >
            <CustomSelect text={'Cooking'}/>
            <CustomSelect text={'Cleaning'}/>
            <CustomSelect text={'Dusting'}/>
            <CustomSelect text={'Laundry'}/>
            <CustomSelect text={'Baby Sitter'}/>
            <CustomSelect text={'Care Taker'}/>
            </View>
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.Btn1} activeOpacity={0.6}>
                <Text>Hire me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn} activeOpacity={0.6}>
                <Text>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn} activeOpacity={0.6}
            onPress={()=>{
                navigation.navigate(NavigationNames.Maid_Details)
            }}>
                <Text>Details</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomWishlist

const styles = StyleSheet.create({
    maid:{
        width:135,
        height:163,
        marginTop:15,
        marginLeft:10

    },
    text1:{
        fontSize:10,
        color:'black',
        marginTop:10,
        marginLeft:10
    },
    text2:{
        fontSize:10,
        color:'#7B8387',
        marginTop:10,
        marginLeft:15
    },
 
    text3:{
        fontSize:20,
        color:'black',
        marginTop:15,
        marginLeft:10
    },
    heart:{
        width:14,
        height:13,
        tintColor:'#FFFFFF'
    },
    favorite:{
        width:24,
        height:24,
        borderRadius:24,
        backgroundColor:'#028090',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginLeft:50
    },
    container:{
        width:361,
        height:222,
       margin:10,
        backgroundColor:'#F5F5F5',
        borderRadius:12,
        shadowColor:'#00000040',
        elevation:7
    },
    Btn:{
        width:44,
        height:23,
        backgroundColor:'#028090',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5
    },
     Btn1:{
        width:96,
        height:23,
        backgroundColor:'#028090',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    }
})