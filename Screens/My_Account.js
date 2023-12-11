import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import CustomField from '../Components/CustomField';
import NavigationNames from '../Navigations/NavigationNames';
import CustomBack from '../Components/CustomBack';

CustomBack;
const My_Account = ({navigation}) => {
  return (
    <View>
      <View>
        {/* <CustomHeader text={'My Account'}/> */}
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <CustomBack
              bgcolor={'white'}
              tintColor={'#028090'}
              onPress={() => navigation.navigate(NavigationNames.Profile)}
            />
            <Text style={styles.text}>My_Account</Text>
          </View>
          <View>
            <Image source={require('../Assets/User.png')} style={styles.img} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 40}}>
        <CustomField
          text={'Edit Info'}
          onPress={() => navigation.navigate(NavigationNames.Edit_Info)}
        />
        <CustomField
          text={'Notifications'}
          onPress={() => navigation.navigate(NavigationNames.Notification)}
        />
        <CustomField
          text={'Language'}
          onPress={() => navigation.navigate(NavigationNames.Language)}
        />
        <CustomField
          text={'Report App Issue'}
          onPress={() => navigation.navigate(NavigationNames.App_Issues)}
        />
        <CustomField text={'Privacy'} />
        <CustomField text={'Security'} />
      </View>
    </View>
  );
};

export default My_Account;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    marginTop: 24,
    marginLeft: 20,
  },
  container: {
    width: 393,
    height: 147,
    backgroundColor: '#028090',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    width: 58,
    height: 60,
    marginTop: 18,
    marginRight: 30,
  },
});
