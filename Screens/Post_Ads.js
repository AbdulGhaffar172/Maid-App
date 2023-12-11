import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import CustomBack from '../Components/CustomBack';
import NavigationNames from '../Navigations/NavigationNames';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomInput from '../Components/CustomInput';
import Custombtn from '../Components/Custombtn';

const Post_Ads = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [isNewImg, setNewImg] = useState(false);
  const [imageUri, setImageUri] = useState(require('../Assets/Maid.png'));

  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    result?.assets[0]
      ? (setImageUri(result?.assets[0]?.uri), setNewImg(true))
      : null;
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    result?.assets[0]
      ? (setImageUri(result?.assets[0]?.uri), setNewImg(true))
      : null;
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <CustomBack
          bgcolor={'#028090'}
          tintColor={'white'}
          onPress={() => navigation.navigate(NavigationNames.Home)}
        />
        <Text style={styles.name}>Post Ads</Text>
      </View>
      <View style={styles.container1}>
        <Image
          source={isNewImg ? {uri: imageUri} : imageUri}
          style={styles.img}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            // openCamera();
            openGallery();
          }}
          style={styles.btn}>
          <Text style={styles.text1}> + </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 70}}>
        <CustomInput label={'First Name'} placeholder={'User Name'} />
        <CustomInput label={'Last Name'} placeholder={'User Name'} />
        <CustomInput label={'Enter Email'} placeholder={'email@gmail.com'} />
        <CustomInput label={'Working Since'} placeholder={'12 years'} />
        <CustomInput
          label={'Add Skills'}
          placeholder={'"Cook" "House Cleaner"'}
        />
        <CustomInput label={'Description'} placeholder={'Description'} />
      </View>

      <View style={{marginTop: 30}}>
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
              <Text style={styles.text}>Your Ads is Posted</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Custombtn
          text={'Post Ads'}
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
      </View>
    </View>
  );
};

export default Post_Ads;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    color: 'black',
    marginTop: 25,
    marginLeft: 20,
  },
  btn: {
    width: 43,
    height: 43,
    borderWidth: 1,
    borderColor: '#ED8812',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 130,
    marginTop: -90,
    backgroundColor: 'white',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  img: {
    width: 133,
    height: 133,
    borderRadius: 133 / 2,
  },
  text1: {
    color: '#ED8812',
    fontSize: 20,
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
