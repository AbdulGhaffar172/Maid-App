import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import NavigationNames from '../Navigations/NavigationNames';
import CustomBack from '../Components/CustomBack';
CustomBack
const FAQ = ({navigation}) => {
  return (
    <View>
      <View>
      <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <CustomBack bgcolor={'white'} tintColor={'#028090'} onPress={()=>
       navigation.navigate(NavigationNames.Profile) }/>
        <Text style={styles.text6}>
            FAQ
        </Text>
      </View>
      <View>
        <Image source={require('../Assets/User.png')}
            style={styles.img}
        />
      </View>
    </View>
      </View>
      <View>
        <Text style={styles.text}>How can we help you?</Text>
        <View>
          <TextInput style={styles.input}>
            <Image
              source={require('../Assets/Search.png')}
              style={styles.search}
            />
            <Text style={{color: '#B8B3B3', marginLeft: 10}}>
              {'    '} Search in Messages.......
            </Text>
          </TextInput>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={styles.text2}>Top Questions</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.text1}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container1}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text style={styles.text3}>How to create a account?</Text>
            <TouchableOpacity>
              <Text style={styles.text5}>_</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text4}>
            Open the Tradebase app to get started and follow the steps.
            Tradebase doesn’t charge a fee to create or maintain your Tradebase
            account.
          </Text>
        </View>
        <View style={styles.container2}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text style={styles.text3}>How to create a account?</Text>
            <TouchableOpacity>
              <Text style={styles.text5}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text4}>
           
          </Text>
        </View>
        <View style={styles.container2}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text style={styles.text3}>How to create a account?</Text>
            <TouchableOpacity>
              <Text style={styles.text5}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text4}>
           
          </Text>
        </View>
        <View style={styles.container2}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text style={styles.text3}>How to create a account?</Text>
            <TouchableOpacity>
              <Text style={styles.text5}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text4}>
            
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    marginVertical: 20,
    textAlign: 'center',
  },
  text2: {
    fontSize: 20,
    color: 'black',
    marginVertical: 20,
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
    // marginTop:10
  },
  search: {
    width: 17,
    height: 17,
    tintColor: '#7B8387',
    marginLeft: 40,
  },
  text1: {
    fontSize: 14,
    color: '#028090',
    marginVertical: 20,
  },
  container1: {
    width: 342,
    height: 115,
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    alignSelf: 'center',
  },
  text3: {
    fontSize: 12,
    color: 'black',
    marginVertical: 10,
  },
  text4: {
    fontSize: 12,
    color: '#7B8387',
    marginHorizontal: 20,
  },
  text5: {
    fontSize: 14,
    color: '#028090',
    fontWeight: '900',
    marginTop:5
  },
  container2: {
    width: 342,
    height: 79,
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    alignSelf: 'center',
    margin:5
  },
  text6:{
    fontSize:20,
    color:'white',
    marginTop:24,
    marginLeft:20
},
container:{
    width:393,
    height:147,
    backgroundColor:'#028090',
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
},
img:{
    width:58,
    height:60,
    marginTop:18,
    marginRight:30
}
});
