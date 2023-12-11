import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import NavigationNames from '../Navigations/NavigationNames';
import CustomBack from '../Components/CustomBack';
import CustomInput from '../Components/CustomInput';
import Custombtn from '../Components/Custombtn';

const Hirring = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <CustomBack
          bgcolor={'#028090'}
          tintColor={'white'}
          onPress={() => navigation.navigate(NavigationNames.Maid_Details)}
        />
        <Text style={styles.name}>Hirring Maid</Text>
      </View>
      <View style={{marginTop: 40}}>
        <CustomInput label={'Enter Name'} placeholder={'Name'} />
        <CustomInput label={'Enter Email'} placeholder={'email@gmail.com'} />
        <CustomInput label={'Enter Phone'} placeholder={'+92123456789'} />
        <CustomInput
          label={'Service Required'}
          placeholder={'Please Select an Option'}
        />
        <CustomInput
          label={'Duration'}
          placeholder={'Please Select an Option'}
        />
        <CustomInput label={'Message'} placeholder={'Message'} />
      </View>
      <View style={{marginTop: 170}}>
        <Modal animationType={'slide'} transparent={true} visible={showModal}>
          <View>
            <TouchableOpacity
              style={styles.modal}
              activeOpacity={1}
              onPress={() => {
                setShowModal(!showModal);
              }}>
              <Image
                source={require('../Assets/Posted.png')}
                style={{width: 62, height: 62}}
              />
              <Text style={styles.text}>Submit Request</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Custombtn
          text={'Submit Request'}
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
      </View>
    </View>
  );
};

export default Hirring;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    color: 'black',
    marginTop: 25,
    marginLeft: 20,
  },
  text: {
    fontSize: 36,
    color: 'black',
  },
  modal: {
    width: 344,
    height: 289,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 250,
  },
});
