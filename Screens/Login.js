import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomBack from '../Components/CustomBack';
import CustomInput from '../Components/CustomInput';
import Custombtn from '../Components/Custombtn';
import NavigationNames from '../Navigations/NavigationNames';
// import CheckBox from 'react-native-check-box'

const Login = ({navigation}) => {
  // const[isSelected, setSelected]=useState(false)
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View>
        <ImageBackground
          source={require('../Assets/Login.png')}
          style={styles.img}>
          <CustomBack bgcolor={'white'} />
        </ImageBackground>
      </View>
      <Text style={styles.heading}>Welcome Back</Text>
      <Text style={styles.text}>Login To account</Text>
      <View>
        <CustomInput label={'Enter Email'} placeholder={'email@gmail.com'} />
        <CustomInput
          label={'Enter Password'}
          secureText={true}
          placeholder={'Enter Password'}
        />
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          {/* <CheckBox
          // value={isSelected}
          // onValueChange={setSelected}
          onClick={()=>{
      setSelected({
          isSelected:!isSelected
      })
    }}
    isSelected={isSelected}
        /> */}
          <Image source={require('../Assets/Check.png')} style={styles.check} />
          <Text style={styles.text1}>Remember me</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate(NavigationNames.Forgot);
          }}>
          <Text style={styles.forget}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Custombtn
          text={'Login'}
          onPress={() => {
            navigation.navigate(NavigationNames.Bottom_Tab);
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
      <Text style={styles.text2}>Don't have an Account?</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate(NavigationNames.Register);
        }}>
        <Text style={styles.create}>Create Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  img: {
    width: 399,
    height: 299,
  },
  heading: {
    fontSize: 30,
    color: '#191A1C',
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    color: '#7B8387',
    textAlign: 'center',
  },
  check: {
    width: 12,
    height: 13,
  },
  text1: {
    fontSize: 10,
    color: '#7B8387',
    marginLeft: 5,
  },
  forget: {
    fontSize: 10,
    color: '#028090',
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
