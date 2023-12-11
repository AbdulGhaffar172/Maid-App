import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBack from '../Components/CustomBack'
import CustomCate from '../Components/CustomCate'
import NavigationNames from '../Navigations/NavigationNames'

const Categories = ({navigation}) => {
  return (
    <View>
    <View style={{flexDirection:'row'}}>
      <CustomBack bgcolor={'#028090'} tintColor={'white'} onPress={()=>{
        navigation.navigate(NavigationNames.Home)
      }}/>
      <Text style={styles.text}>Categories</Text>
      </View>
      <Text style={styles.text}>
      View all Catrgories here.
      </Text>
      <View>
        <CustomCate img={require('../Assets/Cate1.png')} text={'Cooks'} 
        onPress={()=>{navigation.navigate(NavigationNames.Cooks)}}
 />
        <CustomCate img={require('../Assets/Cate2.png')} text={'House Cleaner'}
          onPress={()=>{navigation.navigate(NavigationNames.House_Cleaner)}}
        />
        <CustomCate img={require('../Assets/Cate3.png')} text={'Dusting'}
          onPress={()=>{navigation.navigate(NavigationNames.Dusting)}}
        />
        <CustomCate img={require('../Assets/Cate4.png')} text={'Laundry'}
          onPress={()=>{navigation.navigate(NavigationNames.Laundry)}}
        />
        <CustomCate img={require('../Assets/Cate5.png')} text={'Baby Sitter'}
          onPress={()=>{navigation.navigate(NavigationNames.Baby_Sitter)}}
        />
        <CustomCate img={require('../Assets/Cate6.png')} text={'Patient Care Taker'}
          onPress={()=>{navigation.navigate(NavigationNames.Patient_Care_Taker)}}
        />
        <CustomCate img={require('../Assets/Cate7.png')} text={'All in One'}
          onPress={()=>{navigation.navigate(NavigationNames.All_In_One)}}
        />
      </View>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'black',
        marginTop:24,
        marginLeft:20
    }
})