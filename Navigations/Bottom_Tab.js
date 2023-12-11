import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import NavigationNames from './NavigationNames';
import Message from '../Screens/Message';
import Ads from '../Screens/Ads';
import Profile from '../Screens/Profile';
import Post_Ads from '../Screens/Post_Ads';

const Tab = createBottomTabNavigator();

const Bottom_Tab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationNames.Home}
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#028090'},
        tabBarIcon: ({focused}) => (
          <View
            style={
              [
                // styles.tabBarView,{backgroundColor:focused?'#ED8812':null,}
              ]
            }>
            <Image
              source={
                route.name === 'Home'
                  ? require('../Assets/Home.png')
                  : route.name === 'Message'
                  ? require('../Assets/Message.png')
                  : route.name === 'Ads'
                  ? require('../Assets/Ads.png')
                  : route.name === 'Profile'
                  ? require('../Assets/Profile.png')
                  : null
              }
              style={[
                styles.Img,
                //  {tintColor:focused?'#FFFFFF':null,}
              ]}
            />
          </View>
        ),
      })}>
      <Tab.Screen name={NavigationNames.Home} component={Home} />
      <Tab.Screen name={NavigationNames.Message} component={Message} />
      <Tab.Screen
        name={NavigationNames.Post_Ads}
        component={Post_Ads}
        options={{
          tabBarStyle: {
            display: 'none',
          },

          tabBarIcon: () => (
            <View style={styles.container1}>
              <View style={styles.container2}>
                <Text style={styles.text}>+</Text>
              </View>
            </View>
            // <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name={NavigationNames.Ads} component={Ads} />
      <Tab.Screen
        name={NavigationNames.Profile}
        component={Profile}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default Bottom_Tab;

const styles = StyleSheet.create({
  Img: {
    width: 27,
    height: 24,
    tintColor: '#FFFFFF',
  },
  tabBarView: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50 / 2,
    marginHorizontal: 50,
  },
  text: {
    fontSize: 15,
    color: '#028090',
  },
  container2: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#028090',
  },
  container1: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
