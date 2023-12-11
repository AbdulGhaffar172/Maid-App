import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomBack from '../Components/CustomBack';
import NavigationNames from '../Navigations/NavigationNames';

const Chat = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#028090', flex: 1}}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <View style={{flexDirection: 'row'}}>
          <CustomBack bgcolor={'white'} tintColor={'black'} onPress={()=>
          navigation.navigate(NavigationNames.Message)
          } />
          <View>
            <Text style={styles.name}>Dania Emaan</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.online}>Online :</Text>
              <Text style={styles.time}>10 min ago</Text>
            </View>
          </View>
          <View style={{marginTop: 35}}>
            <View style={styles.point}></View>
            <View style={styles.point}></View>
            <View style={styles.point}></View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginTop: 50}}>
          <Image source={require('../Assets/Maid.png')} style={styles.img} />

          <View style={styles.container1}>
            <Text style={styles.text}>Hello! I am dania expet in cooking</Text>
            <Text style={styles.text}>and also in baby sitter.</Text>
          </View>
          <View>
            <Text style={styles.text1}>11.25AM</Text>
            <Image source={require('../Assets/Tik.png')} style={styles.Tiks} />
          </View>
        </View>
        <View style={{flexDirection: 'row-reverse'}}>
          <View style={styles.container2}>
            <Text>hallo Dania</Text>
          </View>
          <View>
            <Text style={styles.text1}>11.45AM</Text>
            <Image source={require('../Assets/Tik.png')} style={styles.Tiks} />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 50}}>
          <Image source={require('../Assets/Maid.png')} style={styles.img} />

          <View style={styles.container1}>
            <Text style={styles.text}>Hello! I am dania expet in cooking</Text>
            <Text style={styles.text}>and also in baby sitter.</Text>
          </View>
          <View>
            <Text style={styles.text1}>11.55AM</Text>
            <Image source={require('../Assets/Tik.png')} style={styles.Tiks} />
          </View>
        </View>
        <View style={{flexDirection:'row', marginTop:320}}>
        <View style={styles.input}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assets/Reaction.png')}
              style={styles.reaction}
            />
            <Text style={styles.text2}>Type massage</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../Assets/Send.png')} style={styles.doc} />
            <Image
              source={require('../Assets/Gallery.png')}
              style={styles.reaction}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.mic} activeOpacity={0.6}>
            <Image source={require('../Assets/Send.png')} style={styles.doc1}/>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    color: 'white',
    marginTop: 24,
    marginLeft: 10,
  },
  online: {
    fontSize: 10,
    marginLeft: 10,
  },
  time: {
    fontSize: 8,
    color: '#B8B3B3',
    marginTop: 3,
    marginLeft: 5,
  },
  point: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: 'white',
    marginVertical: 2,
    marginLeft: 200,
  },
  container: {
    backgroundColor: '#F5F5F5',
    width: 383,
    height: 786,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  img: {
    width: 38,
    height: 38,
    borderRadius: 38,
    marginLeft: 10,
    marginTop: 40,
  },
  text: {
    fontSize: 10,
    color: 'black',
  },
  container1: {
    width: 200,
    height: 67,
    backgroundColor: '#FFFFFF',
    shadowColor: '#0000001A',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  Tiks: {
    width: 10,
    height: 10,
    marginLeft: 5,
  },
  text1: {
    fontSize: 10,
    color: 'black',
    marginTop: 50,
    marginLeft: 5,
  },
  container2: {
    width: 101,
    height: 41,
    backgroundColor: '#028090',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 10,
  },
  input: {
    width: 300,
    height: 48,
    borderRadius: 77,
    backgroundColor: 'white',
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center',
    marginHorizontal:5
    // alignSelf:'flex-end'
  },
  reaction: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  doc: {
    width: 20,
    height: 20,
    marginLeft: 130,
  },
  text2: {
    fontSize: 10,
    color: 'black',
    marginLeft: 5,
  },
  mic:{
    width:48,
    height:48,
    borderRadius:48,
    backgroundColor:'#028090',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:5
  },
  doc1: {
    width: 20,
    height: 20,
    tintColor:'white'
  },
});
