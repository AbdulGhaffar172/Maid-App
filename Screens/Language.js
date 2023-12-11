import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../Components/CustomHeader';

const Language = ({navigation}) => {
  return (
    <View>
      <View>
        <CustomHeader text={'Language'} />
      </View>
      <Text style={styles.text}>Suggested</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={styles.text1}>English (US)</Text>
        <View style={styles.container1}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 20,
        }}>
        <Text style={styles.text1}>Urdu</Text>
        <View style={styles.container2}>
          <View style={styles.container3}></View>
        </View>
      </View>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    margin: 20,
  },
  text1: {
    fontSize: 14,
    color: 'black',
  },
  container1: {
    width: 24,
    height: 24,
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#D9D9D9',
  },
  container2: {
    width: 24,
    height: 24,
    backgroundColor: '#028090',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  container3: {
    width: 12,
    height: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
});
