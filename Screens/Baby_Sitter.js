import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import CustomBack from '../Components/CustomBack'
import NavigationNames from '../Navigations/NavigationNames'
import CustomDetails from '../Components/CustomDetails'
const Baby_Sitter = ({navigation}) => {
  return (
    <View>
    <View style={{flexDirection:'row'}}>
    <CustomBack bgcolor={'#028090'} tintColor={'white'} onPress={()=>{
      navigation.navigate(NavigationNames.Categories)
    }}/>
    <Text style={styles.text}>Baby Sitter</Text>
    </View>
    <Text style={styles.text}>
    View all best Baby Sitter here.
    </Text>
    <ScrollView>
    <View style={{flexDirection:'row', flexWrap:'wrap', marginBottom:100, justifyContent:'center'}} >
    <CustomDetails img={require('../Assets/Cook1.png')} name={'Dania Emaan'}/>
    <CustomDetails img={require('../Assets/Cook2.png')} name={'Kiran Emaan'}/>
    <CustomDetails img={require('../Assets/Cook3.png')} name={'Areeba Ali'}/>
    <CustomDetails img={require('../Assets/Cook4.png')} name={'Aqsa Nuaman'}/>
    <CustomDetails img={require('../Assets/Cook5.png')} name={'Kashaf Emaan'}/>
    <CustomDetails img={require('../Assets/Cook6.png')} name={'Ameerah'}/>
    <CustomDetails img={require('../Assets/Cook1.png')} name={'Dania Emaan'}/>
    <CustomDetails img={require('../Assets/Cook2.png')} name={'Kiran Emaan'}/>
    <CustomDetails img={require('../Assets/Cook3.png')} name={'Areeba Ali'}/>
    <CustomDetails img={require('../Assets/Cook4.png')} name={'Aqsa Nauman'}/>
    <CustomDetails img={require('../Assets/Cook5.png')} name={'Kashaf Emaan'}/>
    <CustomDetails img={require('../Assets/Cook6.png')} name={'Ameerah'}/>
    </View>
    </ScrollView>
  </View>
  )
}

export default Baby_Sitter

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'black',
        marginTop:24,
        marginLeft:20
    }
})