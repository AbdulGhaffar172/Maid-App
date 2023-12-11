import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../Components/CustomHeader';
import ToggleSwitch from 'toggle-switch-react-native';
const Notification = ({navigation}) => {
  return (
    <View>
      <View>
        <CustomHeader text={'Notification'} />
      </View>

      <Text style={styles.text}>Common</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 5,
        }}>
        <Text style={styles.text1}>General Notication</Text>
        <ToggleSwitch
          isOn={true}
          onColor="#028090"
          offColor="#D9D9D9"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 5,
        }}>
        <Text style={styles.text1}>Sound</Text>
        <ToggleSwitch
          isOn={false}
          onColor="#028090"
          offColor="#D9D9D9"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 5,
        }}>
        <Text style={styles.text1}>Vibrate</Text>
        <ToggleSwitch
          isOn={true}
          onColor="#028090"
          offColor="#D9D9D9"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </View>
      <View style={styles.line}></View>
      <Text style={styles.text}>System & services update</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 5,
        }}>
        <Text style={styles.text1}>App Updates</Text>
        <ToggleSwitch
          isOn={false}
          onColor="#028090"
          offColor="#D9D9D9"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    margin: 20,
  },
  text1: {
    fontSize: 14,
    color: '#191A1C',
  },
  line: {
    width: 342,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginVertical: 20,
  },
});
