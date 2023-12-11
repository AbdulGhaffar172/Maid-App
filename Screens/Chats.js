import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

import CustomChat from '../Components/CustomChat'

const Chats = ({navigation}) => {
  return (
    <View style={{marginTop:10}}>
    <ScrollView>
     <CustomChat img={require('../Assets/Maid.png')} name={'Dania Emaan'}/>
     <CustomChat img={require('../Assets/Chat2.png')} name={'Areeba'}/>
     <CustomChat img={require('../Assets/Chat3.png')} name={'Kashaf Emaan'}/>
     <CustomChat img={require('../Assets/Chat4.png')} name={'Alina Tariq'}/>
     <CustomChat img={require('../Assets/Chat4.png')} name={'Jawaria Arshad'}/>
     <CustomChat img={require('../Assets/Chat4.png')} name={'Jawaria Arshad'}/>
     <CustomChat img={require('../Assets/Chat4.png')} name={'Jawaria Arshad'}/>
     </ScrollView>
    </View>
  )
}

export default Chats

const styles = StyleSheet.create({})