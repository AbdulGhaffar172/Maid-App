import { StyleSheet, Text, View, Modal, TouchableOpacity, Image} from 'react-native'
import React,{useState} from 'react'
import CustomHeader from '../Components/CustomHeader'
import CustomInput from '../Components/CustomInput'
import Custombtn from '../Components/Custombtn'


const Edit_Info = ({navigation}) => {
   const [showModal, setShowModal] = useState(false);
  return (
    <View style={{backgroundColor:'white', flex:1}}>
     <View>
        <CustomHeader text={'Edit Info'}/>
     </View>
     <View style={{marginTop:30}}>
        <CustomInput label={'Name'} placeholder={'User Name'}/>
        <CustomInput label={'Email '} placeholder={'email@gmail.com'}/>
        <CustomInput label={'Phone'} placeholder={'+923456789'}/>
        <CustomInput label={'Password'} placeholder={'Eng@123#'} secureText={true}/>
     </View>
     <View style={{marginTop:80}}>
     <Modal
          animationType={'slide'}
          transparent={true}
          visible={showModal}>
          <View >
          <TouchableOpacity style={styles.modal} activeOpacity={1} 
          onPress={() => {
                setShowModal(!showModal);
              }}
          >
          <Image source={require('../Assets/Posted.png')}
            style={{width:62,
            height:62}}
          />
            <Text style={styles.text}>Update Complete</Text>
          
          </TouchableOpacity>
          </View>
          </Modal>
        <Custombtn text={'Update'} onPress={() => {
                setShowModal(!showModal);
              }}/>
     </View>
    </View>
  )
}

export default Edit_Info

const styles = StyleSheet.create({
   text:{
      fontSize:36,
      color:'black'
    },
    modal:{
      width:344,
      height:289,
      borderRadius:12,
      backgroundColor:'#FFFFFF',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
     marginTop:250
    }
})