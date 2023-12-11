import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import CustomCategories from '../Components/CustomCategories';
import CustomMaid from '../Components/CustomMaid';
import NavigationNames from '../Navigations/NavigationNames';

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <View>
          <Text style={styles.text1}>Welcome back!</Text>
          <Text style={styles.name}>Hi Dania</Text>
        </View>
        <TouchableOpacity style={styles.container} activeOpacity={0.6}>
          <Image
            source={require('../Assets/User.png')}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput style={styles.input}>
          <Text style={{color: '#B8B3B3'}}>
            Search for maid, baby sitter more...{'                     '}
          </Text>
          <Image
            source={require('../Assets/Search.png')}
            style={styles.search}
          />
        </TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text2}>Categories</Text>
        <Text style={styles.text3}>5+</Text>
        <TouchableOpacity style={{marginLeft: 180}} onPress={()=>{
            navigation.navigate(NavigationNames.Categories)
        }}>
          <Text style={styles.text3}>See More</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.categories} horizontal={true}>
        <CustomCategories img={require('../Assets/Cate1.png')} text={'Cook'}
        onPress={()=>{
          navigation.navigate(NavigationNames.Cooks)
        }} />
        <CustomCategories
          img={require('../Assets/Cate2.png')}
          text={'House clean...'}
          onPress={()=>{
          navigation.navigate(NavigationNames.House_Cleaner)
        }}
        />
        <CustomCategories
          img={require('../Assets/Cate3.png')}
          text={'Dusting'}
          onPress={()=>{
          navigation.navigate(NavigationNames.Dusting)
        }}
        />
        <CustomCategories
          img={require('../Assets/Cate4.png')}
          text={'Laundry'}
          onPress={()=>{
          navigation.navigate(NavigationNames.Laundry)
        }}
        />
        <CustomCategories
          img={require('../Assets/Cate5.png')}
          text={'Baby Sitter'}
          onPress={()=>{
          navigation.navigate(NavigationNames.Baby_Sitter)
        }}
        />
        <CustomCategories
          img={require('../Assets/Cate6.png')}
          text={'Patient care Taker'}
          onPress={()=>{
          navigation.navigate(NavigationNames.Patient_Care_Taker)
        }}
        />
      </ScrollView>
      <ScrollView>
        <Text style={styles.heading}>New Maid</Text>
        <ScrollView style={styles.categories} horizontal={true}>
          <CustomMaid
            text={'House Cleaner'}
            img={require('../Assets/Maid1.png')}
          />
          <CustomMaid
            text={'Baby Sitter'}
            img={require('../Assets/Ad3.png')}
          />
          <CustomMaid
            text={'Care Taker'}
            img={require('../Assets/Maid1.png')}
          />
          <CustomMaid text={'Cooks'} img={require('../Assets/Maid1.png')} />
        </ScrollView>
        <Text style={styles.heading}>Cook</Text>
        <ScrollView style={styles.categories} horizontal={true}>
          <CustomMaid
            text={'Ameerah'}
            img={require('../Assets/Cook.png')}
          />
          <CustomMaid
            text={'Aqsa Nauman'}
            img={require('../Assets/Maid1.png')}
          />
          <CustomMaid
            text={'Alina Tariq'}
            img={require('../Assets/Maid1.png')}
          />
          <CustomMaid text={'Jawaria Arshad'} img={require('../Assets/Maid1.png')} />
        </ScrollView>
        <Text style={styles.heading}>House Cleaning</Text>
        <ScrollView style={styles.categories1} horizontal={true}>
          <CustomMaid
            text={'Emaan'}
            img={require('../Assets/Maid1.png')}
          />
          <CustomMaid
            text={'Dania Ali'}
            img={require('../Assets/Maid1.png')}
          />
          <CustomMaid
            text={'Huma'}
            img={require('../Assets/Maid1.png')}
          />
          <CustomMaid text={'Kiran Numan'} img={require('../Assets/Maid1.png')} />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text1: {
    fontSize: 14,
    color: '#028090',
  },
  name: {
    fontSize: 20,
    color: 'black',
  },
  profile: {
    width: 54,
    height: 54,
    borderRadius: 54,
  },
  container: {
    width: 58,
    height: 58,
    borderRadius: 58,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  search: {
    width: 17,
    height: 17,
    tintColor: '#7B8387',
    marginLeft: 40,
  },
  text2: {
    fontSize: 14,
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
  },
  text3: {
    fontSize: 10,
    color: 'black',
    marginHorizontal: 10,
    marginTop: 15,
  },
  categories: {
    flexDirection: 'row',
    // height:81
  },
  heading: {
    fontSize: 20,
    color: 'black',
    marginLeft:20,
    marginVertical:10
  },
  categories1: {
    flexDirection: 'row',
    marginBottom:300
  },
});
