import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomInput from '../Components/CustomInput';
import Custombtn from '../Components/Custombtn';
import NavigationNames from '../Navigations/NavigationNames';

const Forgot = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View>
        <Image source={require('../Assets/Forgot.png')} style={styles.forgot} />
      </View>
      <Text style={styles.heading}>Forgot Password?</Text>
      <Text style={styles.text}>Enter Your Email Address</Text>
      <View>
        <CustomInput label={'Enter Email'} placeholder={'email@gmail.com'} />
      </View>
      <View>
        <Custombtn
          text={'Send Code'}
          onPress={() => {
            navigation.navigate(NavigationNames.Verify);
          }}
        />
      </View>
      <Text style={styles.text2}>Don't have an Account?</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate(NavigationNames.Register);
        }}>
        <Text style={styles.create}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  forgot: {
    width: 399,
    height: 304,
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
  text2: {
    fontSize: 10,
    color: '#191A1C',
    textAlign: 'center',
    marginTop: 200,
  },
  create: {
    fontSize: 12,
    color: '#028090',
    textAlign: 'center',
  },
});
