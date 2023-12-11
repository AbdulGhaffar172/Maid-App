import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import CustomBack from '../Components/CustomBack';
import NavigationNames from '../Navigations/NavigationNames';
import CustomAds from '../Components/CustomAds';

const Ads = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <CustomBack
          bgcolor={'#028090'}
          tintColor={'white'}
          onPress={() => navigation.navigate(NavigationNames.Home)}
        />
        <Text style={styles.name}>My Ads</Text>
      </View>
      <Text style={styles.text}>View All Your Adds Here</Text>
      <ScrollView style={{marginBottom: 110}}>
        <CustomAds
          img={require('../Assets/Ad1.png')}
          text={'active'}
          name={'Dania Emaan'}
        />
        <CustomAds
          img={require('../Assets/Maid.png')}
          text={'Unactive'}
          name={'Shafkat Emaan'}
        />
        <CustomAds
          img={require('../Assets/Ad3.png')}
          text={'active'}
          name={'Aqsa Nauman'}
        />
      </ScrollView>
    </View>
  );
};

export default Ads;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    color: 'black',
    marginTop: 25,
    marginLeft: 20,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginTop: 24,
    marginLeft: 20,
  },
});
