import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import First from '../Screens/First';
import Second from '../Screens/Second';
import Third from '../Screens/Third';
import NavigationNames from './NavigationNames';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Forgot from '../Screens/Forgot';
import Verify from '../Screens/Verify';
import Bottom_Tab from './Bottom_Tab';
import Categories from '../Screens/Categories';
import Cooks from '../Screens/Cooks';
import House_Cleaner from '../Screens/House_Cleaner';
import Dusting from '../Screens/Dusting';
import Laundry from '../Screens/Laundry';
import Baby_Sitter from '../Screens/Baby_Sitter';
import Patient_Care_Taker from '../Screens/Patient_Care_Taker';
import All_In_One from '../Screens/All_In_One';
import Maid_Details from '../Screens/Maid_Details';
import CustomMaid from '../Components/CustomMaid';
import Chat from '../Screens/Chat';
import Post_Ads from '../Screens/Post_Ads';
import My_Wishlist from '../Screens/My_Wishlist';
import Hirring from '../Screens/Hirring';
import Chats from '../Screens/Chats';
import Hiring_Requests from '../Screens/Hiring_Requests';
import Hirring_Details from '../Screens/Hirring_Details';
import My_Account from '../Screens/My_Account';
import Edit_Info from '../Screens/Edit_Info';
import Notification from '../Screens/Notification';
import Language from '../Screens/Language';
import App_Issues from '../Screens/App_Issues';
import FAQ from '../Screens/FAQ';



const Stack = createStackNavigator();

const Stack_Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName={NavigationNames.First}
    screenOptions={{
        headerShown:false
    }}
    >
    <Stack.Screen name={NavigationNames.First} component={First} />
    <Stack.Screen name={NavigationNames.Second} component={Second} />
    <Stack.Screen name={NavigationNames.Third} component={Third} />
    <Stack.Screen name={NavigationNames.Login} component={Login} />
    <Stack.Screen name={NavigationNames.Register} component={Register} />
    <Stack.Screen name={NavigationNames.Forgot} component={Forgot} />
    <Stack.Screen name={NavigationNames.Verify} component={Verify} />
    <Stack.Screen name={NavigationNames.Bottom_Tab} component={Bottom_Tab} />
    <Stack.Screen name={NavigationNames.Cooks} component={Cooks} />
    <Stack.Screen name={NavigationNames.House_Cleaner} component={House_Cleaner} />
    <Stack.Screen name={NavigationNames.Dusting} component={Dusting} />
    <Stack.Screen name={NavigationNames.Laundry} component={Laundry} />
    <Stack.Screen name={NavigationNames.Baby_Sitter} component={Baby_Sitter} />
    <Stack.Screen name={NavigationNames.Patient_Care_Taker} component={Patient_Care_Taker} />
    <Stack.Screen name={NavigationNames.All_In_One} component={All_In_One} />
    <Stack.Screen name={NavigationNames.Categories} component={Categories} />
    <Stack.Screen name={NavigationNames.Maid_Details} component={Maid_Details} />
    <Stack.Screen name={NavigationNames.CustomMaid} component={CustomMaid} />
    <Stack.Screen name={NavigationNames.Chat} component={Chat} />
    <Stack.Screen name={NavigationNames.Post_Ads} component={Post_Ads} />
    <Stack.Screen name={NavigationNames.My_Wishlist} component={My_Wishlist} />
    <Stack.Screen name={NavigationNames.Hirring} component={Hirring} />
    <Stack.Screen name={NavigationNames.Chats} component={Chats} />
    <Stack.Screen name={NavigationNames.Hiring_Requests} component={Hiring_Requests} />
    <Stack.Screen name={NavigationNames.Hirring_Details} component={Hirring_Details} />
    <Stack.Screen name={NavigationNames.My_Account} component={My_Account} />
    <Stack.Screen name={NavigationNames.Edit_Info} component={Edit_Info} />
    <Stack.Screen name={NavigationNames.Notification} component={Notification} />
    <Stack.Screen name={NavigationNames.Language} component={Language} />
    <Stack.Screen name={NavigationNames.App_Issues} component={App_Issues} />
    <Stack.Screen name={NavigationNames.FAQ} component={FAQ} />
  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Stack_Navigation

const styles = StyleSheet.create({})