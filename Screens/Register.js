import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import CustomBack from '../Components/CustomBack';
import CustomInput from '../Components/CustomInput';
import NavigationNames from '../Navigations/NavigationNames';
import Custombtn from '../Components/Custombtn';

const Register = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View>
        <ImageBackground
          source={require('../Assets/Register.png')}
          style={styles.img}>
          <CustomBack
            onPress={() => {
              navigation.navigate(NavigationNames.Third);
            }}
            bgcolor={'white'}
          />
        </ImageBackground>
      </View>
      <Text style={styles.heading}>Register</Text>
      <Text style={styles.text}>Create Your New Account</Text>
      <View>
        <CustomInput label={'Enter Name'} placeholder={'User Name'} />
        <CustomInput label={'Enter Email'} placeholder={'email@gmail.com'} />
        <CustomInput label={'Enter Phone'} placeholder={'+92123456789'} />
        <CustomInput
          label={'Enter Password'}
          placeholder={'Eng@123#'}
          secureText={true}
        />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text style={styles.text1}>By signing up you agree to our</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.create1}>Terms & Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>and</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.create1}>Privacy Policy</Text>
      </TouchableOpacity>
      <View>
        <Custombtn
          text={'Sign Up'}
          onPress={() => {
            navigation.navigate(NavigationNames.Login);
          }}
        />
      </View>
      <View
        style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 10}}>
        <View style={styles.line}></View>
        <Text style={styles.text}>OR</Text>
        <View style={styles.line}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={require('../Assets/Google.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={require('../Assets/Facebook.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.apple}>
          <Image source={require('../Assets/Apple.png')} style={styles.logo1} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>Already have an Account?</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate(NavigationNames.Login);
        }}>
        <Text style={styles.create}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  img: {
    width: 395,
    height: 183,
  },
  heading: {
    fontSize: 30,
    color: '#191A1C',
    // marginTop:40,
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    color: '#7B8387',
    textAlign: 'center',
  },
  text1: {
    fontSize: 10,
    color: '#191A1C',
    textAlign: 'center',
    marginTop: 1,
  },
  create1: {
    fontSize: 12,
    color: '#028090',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 45,
    marginVertical: 10,
  },
  line: {
    width: 120,
    borderWidth: 0.3,
    borderColor: '#028090',
    height: 0,
    marginHorizontal: 20,
    marginTop: 16,
  },
  logo: {
    width: 32,
    height: 32,
    marginHorizontal: 20,
  },
  text2: {
    fontSize: 10,
    color: '#191A1C',
    textAlign: 'center',
    marginTop: 20,
  },
  create: {
    fontSize: 12,
    color: '#028090',
    textAlign: 'center',
  },
  logo1: {
    width: 21,
    height: 25,
  },
  apple: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
