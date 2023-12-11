import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import NavigationNames from '../Navigations/NavigationNames';
import CustomBack from '../Components/CustomBack';
import Custombtn from '../Components/Custombtn';

const Hirring_Details = ({navigation}) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <CustomBack
          bgcolor={'#028090'}
          tintColor={'white'}
          onPress={() => {
            navigation.navigate(NavigationNames.Message);
          }}
        />
        <Text style={styles.text}>Hirring Details</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={require('../Assets/Share.png')}
            style={styles.Share}></Image>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <ImageBackground
            source={require('../Assets/Detail1.png')}
            style={styles.maid}></ImageBackground>
        </View>
        <View>
          <Text style={styles.text3}>Usama Nasir</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>working required :</Text>
            <Text style={styles.text2}>Cooking, Dusting</Text>
          </View>
          <View style={styles.line}></View>
          <Text style={styles.text1}>Contact Details</Text>
          <View>
            <Text style={styles.text4}>email@gmail.com</Text>
          </View>
          <View>
            <Text style={styles.text4}>+92123456789</Text>
          </View>
          <View>
            <Text style={styles.text4}>Jinnah Park RYK</Text>
          </View>
          <View>
            <Text style={styles.text1}>Time Slots</Text>
            <View>
              <Text style={styles.text4}>PM 9 6 AM</Text>
              <View style={styles.line}></View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.des}>Description:</Text>
        <Text style={styles.text5}>Dear [Dania Emaan],</Text>
        <Text style={styles.text5}>
          I hope this note finds you well. I am writing to inquire about your
          availability to work as a cook in my house. I understand that you are
          a skilled and experienced cook, and I would be honored to have you
          prepare meals for me and my family.
        </Text>
        <Text style={styles.text5}>
          As for compensation, I am willing to offer you $100 per month for your
          services. This includes preparing meals for breakfast, lunch, and
          dinner, as well as any additional snacks or refreshments as needed.
        </Text>
        <Text style={styles.text5}>
          I am confident that your culinary expertise and attention to detail
          will greatly benefit my household. I appreciate your time and
          consideration, and I hope to hear back from you soon regarding your
          availability.
        </Text>
        <Text style={styles.text5}>Thank you for your consideration.</Text>
        <Text style={styles.text5}>Best regards,</Text>
        <Text style={styles.text5}>[Usama Nasir]</Text>
      </View>
      <View style={{marginTop: 30}}>
        <Custombtn
          text={'Go Chat'}
          onPress={() => {
            navigation.navigate(NavigationNames.Chat);
          }}
        />
      </View>
    </View>
  );
};

export default Hirring_Details;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    marginTop: 24,
    marginLeft: 20,
  },
  Share: {
    width: 15,
    height: 18,
    marginTop: 30,
    marginLeft: 150,
  },
  maid: {
    width: 160,
    height: 194,
    marginTop: 20,
    marginLeft: 10,
  },
  text1: {
    fontSize: 10,
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
  },
  text2: {
    fontSize: 10,
    color: '#028090',
    marginTop: 10,
    marginLeft: 15,
  },
  text4: {
    fontSize: 10,
    color: '#7B8387',
  },
  text3: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    marginLeft: 10,
  },
  line: {
    width: 213,
    borderWidth: 0.5,
    borderColor: '#7B8387',
    backgroundColor: '#7B8387',
    marginTop: 10,
  },
  des: {
    fontSize: 16,
    color: '#028090',
    marginHorizontal: 10,
  },
  text5: {
    fontSize: 12,
    color: '#7B8387',
    lineHeight: 19,
    marginHorizontal: 10,
  },
});
