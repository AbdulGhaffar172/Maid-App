import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import CustomBack from '../Components/CustomBack';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Hiring_Requests from './Hiring_Requests';
import NavigationNames from '../Navigations/NavigationNames';
import Chats from './Chats';

const Tab = createMaterialTopTabNavigator();

const Message = ({navigation}) => {
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
        <Text style={styles.name}>Messages</Text>
      </View>
      <View style={{marginBottom: 30}}>
        <TextInput style={styles.input}>
          <Text style={{color: '#B8B3B3'}}>
            Search in Messages.......{'                                     '}
          </Text>
          <Image
            source={require('../Assets/Search.png')}
            style={styles.search}
          />
        </TextInput>
      </View>

      <Tab.Navigator
        initialRouteName={NavigationNames.Chats}
        // screenOptions={{
        //     tabBarLabelStyle: {fontSize: 12, color: 'red'},
        //   }}
      >
        <Tab.Screen
          name={NavigationNames.Chats}
          component={Chats}
          options={{tabBarLabel: 'Chats'}}
        />
        <Tab.Screen
          name={NavigationNames.Hiring_Requests}
          component={Hiring_Requests}
          options={{tabBarLabel: 'Hiring Requests'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    color: 'black',
    marginTop: 25,
    marginLeft: 20,
  },

  input: {
    width: 353,
    height: 41,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 22,
    // flexDirection:'row',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  search: {
    width: 17,
    height: 17,
    tintColor: '#7B8387',
    marginLeft: 40,
  },
});
