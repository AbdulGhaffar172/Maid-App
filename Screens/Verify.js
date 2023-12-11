import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomBack from '../Components/CustomBack';
import NavigationNames from '../Navigations/NavigationNames';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Custombtn from '../Components/Custombtn';

const CELL_COUNT = 4;
const Verify = ({navigation}) => {
  const [counter, setCounter] = useState(60);
  const [value, setValue] = useState('');
  const [isFull, setIsFull] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT, setIsFull});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleFulfill = code => {
    if (code.length === CELL_COUNT) {
      setIsFull(true);
    }
  };
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <CustomBack
          bgcolor={'#028090'}
          onPress={() => {
            navigation.navigate(NavigationNames.Forgot);
          }}
          tintColor={'white'}
        />
        <Text style={styles.text}>OTP Verification</Text>
      </View>
      <View>
        <Image source={require('../Assets/Otp.png')} style={styles.img} />
      </View>
      <Text style={styles.heading}>Enter OTP</Text>
      <Text style={styles.text1}> Code has been sent to your email</Text>
      <View>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={code => {
            setValue(code);
            handleFulfill(code);
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFiledRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[
                styles.cell,
                isFocused && styles.focusCell,
                isFull && styles.full,
              ]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        {isFull &&
          {
            /* <View style={styles.fullMessage}>
            <Text>Code confirmation is Done</Text>
            <Button title="Proceed" onPress={() => console.log('Proceed')} />
          </View> */
          }}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Text style={styles.text2}>You should recieve the OTP in </Text>
        <Text style={styles.counter}>{counter} Second</Text>
      </View>
      <View>
        <Custombtn
          text={'Verify'}
          onPress={() => {
            Alert.alert('Its Dumy Verification');
          }}
        />
      </View>
    </View>
  );
};

export default Verify;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#7B8387',
    // textAlign:'center',
    marginTop: 27,
    marginHorizontal: 80,
  },
  img: {
    width: 251,
    height: 251,
    alignSelf: 'center',
    marginVertical: 50,
  },
  heading: {
    fontSize: 30,
    color: '#191A1C',
    // marginTop:40,
    // marginBottom: 10,
    textAlign: 'center',
  },
  text1: {
    fontSize: 20,
    color: '#7B8387',
    marginHorizontal: 40,
  },
  //   root: {
  // flex: 1,
  // padding: 20,
  // justifyContent: 'center',
  //   },
  // title: { textAlign: "center", fontSize: 30 },
  codeFiledRoot: {marginTop: 20, marginHorizontal: 80},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    // borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#D9D9D9',
    textAlign: 'center',
    borderRadius: 10,

    color: 'black',
  },
  focusCell: {
    borderColor: '#000',
  },
  full: {
    borderColor: 'green',
  },
  // fullMessage: {
  //   marginTop: 20,
  //   alignItems: 'center',
  // },
  counter: {
    color: '#028090',
    fontSize: 12,
    // textAlign:'center',
    marginTop: 20,
  },
  text2: {
    fontSize: 12,
    color: '#7B8387',
    marginTop: 20,
    // textAlign:'center',
  },
});
