import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from '../Screens/Chats';
import Hiring_Requests from '../Screens/Hiring_Requests';
import NavigationNames from './NavigationNames';

const Tab = createMaterialTopTabNavigator();

const Top_Tab = () => {
  return (
   <View>
   <Tab.Navigator
   initialRouteName={NavigationNames.Chats}
    // screenOptions={{
    //     tabBarLabelStyle: {fontSize: 12, color: 'red'},
    //   }}
      >
      <Tab.Screen name={NavigationNames.Chats} component={Chats}
      options={{tabBarLabel:'Chats'}} />
      <Tab.Screen name={NavigationNames.Hiring_Requests} component={Hiring_Requests}
      options={{tabBarLabel:'Hiring Requests'}} />
    </Tab.Navigator>
   
    </View>
  )
}

export default Top_Tab

const styles = StyleSheet.create({})