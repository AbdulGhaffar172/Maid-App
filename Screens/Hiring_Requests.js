import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHirring from '../Components/CustomHirring'

const Hiring_Requests = ({navigation}) => {
  return (
    <View>
      <CustomHirring img={require('../Assets/Hirring1.png')} name={'Usama Nasir'}/>
      <CustomHirring img={require('../Assets/Hirring1.png')} name={'Usama Nasir'}/>
      <CustomHirring img={require('../Assets/Hirring1.png')} name={'Usama Nasir'}/>
    </View>
  )
}

export default Hiring_Requests

const styles = StyleSheet.create({})