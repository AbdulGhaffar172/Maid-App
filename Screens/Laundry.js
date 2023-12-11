import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CustomBack from '../Components/CustomBack'
import NavigationNames from '../Navigations/NavigationNames'
import CustomDetails from '../Components/CustomDetails'
const Laundry = ({navigation}) => {
  return (
    <View>
      <View style={{flexDirection:'row'}}>
      <CustomBack bgcolor={'#028090'} tintColor={'white'} onPress={()=>{
        navigation.navigate(NavigationNames.Categories)
      }}/>
      <Text style={styles.text}>Laundry</Text>
      </View>
      <Text style={styles.text}>
      View all best Laundry Maids here.
      </Text>
      <ScrollView>
      <View style={{flexDirection:'row', flexWrap:'wrap', marginBottom:100, justifyContent:'center'}} >
      <CustomDetails img={require('../Assets/L1.png')} name={'Dania Emaan'}/>
      <CustomDetails img={require('../Assets/L2.png')} name={'Kiran Emaan'}/>
      <CustomDetails img={require('../Assets/L3.png')} name={'Areeba Ali'}/>
      <CustomDetails img={require('../Assets/L4.png')} name={'Aqsa Nuaman'}/>
      <CustomDetails img={require('../Assets/L5.png')} name={'Kashaf Emaan'}/>
      <CustomDetails img={require('../Assets/L6.png')} name={'Ameerah'}/>
      <CustomDetails img={require('../Assets/L1.png')} name={'Dania Emaan'}/>
      <CustomDetails img={require('../Assets/L2.png')} name={'Kiran Emaan'}/>
      <CustomDetails img={require('../Assets/L3.png')} name={'Areeba Ali'}/>
      <CustomDetails img={require('../Assets/L4.png')} name={'Aqsa Nauman'}/>
      <CustomDetails img={require('../Assets/L5.png')} name={'Kashaf Emaan'}/>
      <CustomDetails img={require('../Assets/L6.png')} name={'Ameerah'}/>
      </View>
      </ScrollView>
    </View>
  )
}

export default Laundry

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'black',
        marginTop:24,
        marginLeft:20
    }
})