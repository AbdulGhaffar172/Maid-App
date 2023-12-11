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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomField from '../Components/CustomField';
import NavigationNames from '../Navigations/NavigationNames';
import {useNavigation} from '@react-navigation/native';
const Profile = () => {
  const navigation = useNavigation();
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
    <View>
      <View style={styles.container1}>
        <View style={{flexDirection: 'row'}}>
          <CustomBack
            bgcolor={'white'}
            tintColor={'black'}
            onPress={() => {
              navigation.navigate(NavigationNames.Home);
            }}
          />
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.container2}>
          <Modal animationType={'slide'} transparent={true} visible={showModal}>
            <View>
              <TouchableOpacity
                style={styles.modal}
                activeOpacity={1}
                onPress={() => {
                  setShowModal(!showModal);
                }}>
                <Image
                  source={require('../Assets/User.png')}
                  style={{width: 82, height: 88, alignSelf: 'center'}}
                />
                <Text
                  style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
                  Change Profile Photo
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      // openCamera();
                      openGallery();
                    }}
                    style={{
                      width: 102,
                      height: 25,
                      backgroundColor: '#028090',
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: 10,
                    }}>
                    <Text>Update Photo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      width: 102,
                      height: 25,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black'}}>Remove Photo</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
          <Image
            source={isNewImg ? {uri: imageUri} : imageUri}
            style={styles.img}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setShowModal(!showModal);
              // openCamera();
              // openGallery();
            }}
            style={styles.btn}>
            <Image
              source={require('../Assets/Taker.png')}
              style={styles.text1}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Dania Emaan</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../Assets/Location.png')}
            style={styles.location}
          />
          <Text style={styles.text2}>Rahim Yar Khan</Text>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <CustomField
          text={'My Account'}
          onPress={() => navigation.navigate(NavigationNames.My_Account)}
        />
        <CustomField
          text={'My Maids'}
          onPress={() => navigation.navigate(NavigationNames.Ads)}
        />
        <CustomField
          text={'My Wishlist'}
          onPress={() => navigation.navigate(NavigationNames.My_Wishlist)}
        />
        <CustomField
          text={'FAQ'}
          onPress={() => navigation.navigate(NavigationNames.FAQ)}
        />
        <CustomField text={'Help'} />
        <CustomField text={'Privacy'} />
        <CustomField
          text={'Logout'}
          onPress={() => {
            navigation.navigate(NavigationNames.First);
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container1: {
    width: 393,
    height: 311,
    backgroundColor: '#028090',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginTop: 24,
    marginLeft: 15,
  },
  btn: {
    width: 35,
    height: 35,

    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    marginTop: -40,
    backgroundColor: '#028090',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  img: {
    width: 133,
    height: 133,
    borderRadius: 133 / 2,
    marginTop: -30,
  },
  text1: {
    width: 15,
    height: 15,
  },
  text: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },
  location: {
    width: 6,
    height: 9,
    marginTop: 2,
    marginHorizontal: 5,
  },
  text2: {
    fontSize: 10,
    color: '#FFFFFF',
  },

  modal: {
    width: 324,
    height: 218,
    borderRadius: 31,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 250,
  },
});
