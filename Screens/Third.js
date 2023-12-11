import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import NavigationNames from '../Navigations/NavigationNames';

const Third = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/3rd.png')} style={styles.logo} />
      <Text style={styles.heading}>Maid in RYK</Text>
      <Text style={styles.text}>We provide a best and quality</Text>
      <Text style={styles.text}>service of home cleaning or more</Text>
      <Text style={styles.text}>type of maid services etc</Text>
      <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 40}}>
        <View style={styles.container2}></View>
        <View style={styles.container1}></View>
      </View>
      <TouchableOpacity
        style={styles.container3}
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate(NavigationNames.Login);
        }}>
        <Text style={styles.text1}>Explore Now</Text>
        <Image source={require('../Assets/btn.png')} style={styles.btn} />
      </TouchableOpacity>
    </View>
  );
};

export default Third;

const styles = StyleSheet.create({
  logo: {
    width: 303,
    height: 303,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 30,
    color: '#191A1C',
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: '#7B8387',
  },
  container1: {
    width: 10,
    height: 6,
    backgroundColor: '#028090',
    borderRadius: 6,
    marginHorizontal: 2,
  },
  container2: {
    width: 34,
    height: 6,
    backgroundColor: '#028090',
    borderRadius: 6,
  },
  text1: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  btn: {
    width: 7,
    height: 15,
  },
  container3: {
    width: 280,
    height: 50,
    backgroundColor: '#028090',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
