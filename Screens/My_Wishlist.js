import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import NavigationNames from '../Navigations/NavigationNames'
import CustomBack from '../Components/CustomBack'
import CustomWishlist from '../Components/CustomWishlist'

const My_Wishlist = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
        
        }}>
        
        <CustomBack bgcolor={'#028090'} tintColor={'white'} 
        onPress={()=>navigation.navigate(NavigationNames.Maid_Details)
        }/>
        <Text style={styles.name}>My Wishlist</Text>
      </View>
      <Text style={styles.text}>View All Your Wishlist Here</Text>
      <ScrollView style={{marginBottom:100}}>
        <CustomWishlist/>
        <CustomWishlist/>
        <CustomWishlist/>
      </ScrollView>
    </View>
  )
}

export default My_Wishlist

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        color: 'black',
        marginTop:25,
        marginLeft:20
      },
      text:{
        fontSize:20,
        color:'black',
        marginTop:24,
        marginLeft:20
    }
})