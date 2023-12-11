import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import NavigationNames from '../Navigations/NavigationNames'
import CustomBack from '../Components/CustomBack'
import CustomSelect from '../Components/CustomSelect'

const Maid_Details = ({navigation}) => {
  return (
    <View>
       <View style={{flexDirection:'row'}}>
    <CustomBack bgcolor={'#028090'} tintColor={'white'} onPress={()=>{
      navigation.navigate(NavigationNames.Home)
    }}/>
    <Text style={styles.text}>Maid Details</Text>
    <TouchableOpacity activeOpacity={0.6}>
    <ImageBackground source={require('../Assets/Share.png')}
        style={styles.Share}>
           
        </ImageBackground>
    </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}>
        <View>
            <ImageBackground source={require('../Assets/Maid.png')}
                style={styles.maid}
            >
                 <TouchableOpacity style={styles.favorite} activeOpacity={0.6}>
                <Image source={require('../Assets/Heart.png')} 
                    style={styles.heart}
                />
            </TouchableOpacity>
            </ImageBackground>
        </View>
        <View>
            <Text style={styles.text3}>
            Dania Emaan
            </Text>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text1}>
                working since :
                </Text>
                <Text style={styles.text2}>
                12 years
                </Text>
            </View>
            <Text style={styles.text3}>
                Skills
            </Text>
            <View style={{flexDirection:'row', flexWrap:'wrap', marginRight:150}} >
            <CustomSelect text={'Cooking'}/>
            <CustomSelect text={'Cleaning'}/>
            <CustomSelect text={'Dusting'}/>
            <CustomSelect text={'Laundry'}/>
            <CustomSelect text={'Baby Sitter'}/>
            <CustomSelect text={'Care Taker'}/>
            </View>
        </View>
    </View>
    {/* <SafeAreaView> */}
    {/* <View>
    <View style={{flexDirection:'row', alignSelf:'center'}}>
        <TouchableOpacity style={styles.btn1} activeOpacity={0.6}
        onPress={()=>{
            navigation.navigate(NavigationNames.Hirring)
        }}>
            <Text>
                Hire me
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} activeOpacity={0.6}
          onPress={()=>{
            navigation.navigate(NavigationNames.Chat)
        }}>
                <Text>
                    Chat
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3} activeOpacity={0.6}
          onPress={()=>{
            navigation.navigate(NavigationNames.My_Wishlist)
        }}>
                <Text>
                    Wishlist
                </Text>
        </TouchableOpacity>
    </View>
    </View> */}
    <ScrollView>
    <View>
        <Text style={styles.text4}>
        Badges:
        </Text>
        <View>
            <Text style={styles.text5}>
            Punctual
            </Text>
            <View style={{flexDirection:'row', marginLeft:20}}>
                <View style={styles.line1}>

                </View>
                <View style={styles.line2}>

                </View>
            </View>
        </View>
        <View>
            <Text style={styles.text5}>
            Trained
            </Text>
            <View style={{flexDirection:'row', marginLeft:20}}>
                <View style={styles.line1}>

                </View>
                <View style={styles.line2}>

                </View>
            </View>
        </View>
        <View>
            <Text style={styles.text5}>
            Recomended
            </Text>
            <View style={{flexDirection:'row', marginLeft:20}}>
                <View style={styles.line1}>

                </View>
                <View style={styles.line2}>

                </View>
            </View>
        </View>
    </View>
    <View>
        <Text style={styles.text4}>
        Description:
        </Text>
        <Text style={styles.text5}>
        Hi am Dania Emaan , am responsible for keeping residences and commercial
        establishments clean and tidy. They perform various cleaning tasks, which
        include mopping, vacuuming and sweeping floors,
        washing carpets, replacing dirty linen, and wiping down kitchen counters
        </Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={styles.text4}>
            Rating
        </Text>
        <View style={{flexDirection:'row', marginRight:15}}>
            <Text style={styles.text4}>
                4.6
            </Text>
            <Image source={require('../Assets/Star1.png')}
                style={styles.star}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star1}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star1}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star1}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star1}
            />
        </View>
    </View>
    <Text style={styles.text4}>
    Reviews
    </Text>
    <View>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../Assets/Akif.jpg')}
                style={styles.akif}
            />
            <Text style={styles.name}>
                Akif Ali
            </Text>

        </View>
        <View style={{flexDirection:'row', marginLeft:10}}>
        <Image source={require('../Assets/Star1.png')}
                style={styles.star2}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star2}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
            <Text style={styles.date}>
            05-12-2023
            </Text>
        </View>
        <Text style={styles.text5}>
        Bad responsible for keeping residences and commercial  establishments 
        clean and tidy. They perform various cleaning tasks, which include mopping, 
        vacuuming and sweeping floors, washing carpets, replacing dirty linen, 
        and wiping down kitchen counters
        </Text>
        <View style={{flexDirection:'row', justifyContent:'flex-end', marginRight:10}}>
        <Text style={styles.text6}>
        Was this review helpful?
        </Text>
        <View style={styles.container1}>
            <Text style={styles.text7}>
                Yes
            </Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text7}>
                Yes
            </Text>
        </View>
        </View>
    </View>
    <View>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../Assets/Akif.jpg')}
                style={styles.akif}
            />
            <Text style={styles.name}>
                Akif Ali
            </Text>

        </View>
        <View style={{flexDirection:'row', marginLeft:10}}>
        <Image source={require('../Assets/Star1.png')}
                style={styles.star2}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star2}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
            <Text style={styles.date}>
            05-12-2023
            </Text>
        </View>
        <Text style={styles.text5}>
        Bad responsible for keeping residences and commercial  establishments 
        clean and tidy. They perform various cleaning tasks, which include mopping, 
        vacuuming and sweeping floors, washing carpets, replacing dirty linen, 
        and wiping down kitchen counters
        </Text>
        <View style={{flexDirection:'row', justifyContent:'flex-end', marginRight:10}}>
        <Text style={styles.text6}>
        Was this review helpful?
        </Text>
        <View style={styles.container1}>
            <Text style={styles.text7}>
                Yes
            </Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text7}>
                Yes
            </Text>
        </View>
        </View>
    </View>
    <View>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../Assets/Akif.jpg')}
                style={styles.akif}
            />
            <Text style={styles.name}>
                Akif Ali
            </Text>

        </View>
        <View style={{flexDirection:'row', marginLeft:10}}>
        <Image source={require('../Assets/Star1.png')}
                style={styles.star2}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star2}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
            <Text style={styles.date}>
            05-12-2023
            </Text>
        </View>
        <Text style={styles.text5}>
        Bad responsible for keeping residences and commercial  establishments 
        clean and tidy. They perform various cleaning tasks, which include mopping, 
        vacuuming and sweeping floors, washing carpets, replacing dirty linen, 
        and wiping down kitchen counters
        </Text>
        <View style={{flexDirection:'row', justifyContent:'flex-end', marginRight:10}}>
        <Text style={styles.text6}>
        Was this review helpful?
        </Text>
        <View style={styles.container1}>
            <Text style={styles.text7}>
                Yes
            </Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text7}>
                Yes
            </Text>
        </View>
        </View>
    </View>
    <View >
        <View style={{flexDirection:'row'}}>
            <Image source={require('../Assets/Akif.jpg')}
                style={styles.akif}
            />
            <Text style={styles.name}>
                Akif Ali
            </Text>

        </View>
        <View style={{flexDirection:'row', marginLeft:10}}>
        <Image source={require('../Assets/Star1.png')}
                style={styles.star2}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star2}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
             <Image source={require('../Assets/Star1.png')}
                style={styles.star3}
            />
            <Text style={styles.date}>
            05-12-2023
            </Text>
        </View>
        <Text style={styles.text5}>
        Bad responsible for keeping residences and commercial  establishments 
        clean and tidy. They perform various cleaning tasks, which include mopping, 
        vacuuming and sweeping floors, washing carpets, replacing dirty linen, 
        and wiping down kitchen counters
        </Text>
        <View style={{flexDirection:'row', justifyContent:'flex-end', marginRight:10}}>
        <Text style={styles.text6}>
        Was this review helpful?
        </Text>
        <View style={styles.container1}>
            <Text style={styles.text7}>
                Yes
            </Text>
        </View>
        <View style={styles.container1}>
            <Text style={styles.text7}>
                Yes
            </Text>
        </View>
        </View>
    </View>
   
    <View style={{marginBottom:280, marginTop:20}}>
    <View style={{flexDirection:'row', alignSelf:'center'}}>
        <TouchableOpacity style={styles.btn1} activeOpacity={0.6}
        onPress={()=>{
            navigation.navigate(NavigationNames.Hirring)
        }}>
            <Text>
                Hire me
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} activeOpacity={0.6}
          onPress={()=>{
            navigation.navigate(NavigationNames.Chat)
        }}>
                <Text>
                    Chat
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3} activeOpacity={0.6}
          onPress={()=>{
            navigation.navigate(NavigationNames.My_Wishlist)
        }}>
                <Text>
                    Wishlist
                </Text>
        </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
    </View>
  )
}

export default Maid_Details

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'black',
        marginTop:24,
        marginLeft:20
    },
    Share:{
        width:15,
        height:18,
        marginTop:30,
        marginLeft:170
    },
    maid:{
        width:160,
        height:194,
        marginTop:20,
        marginLeft:10
    },
    text1:{
        fontSize:10,
        color:'black',
        marginTop:10,
        marginLeft:10
    },
    text2:{
        fontSize:10,
        color:'#7B8387',
        marginTop:10,
        marginLeft:15
    },
    text4:{
        fontSize:16,
        color:'black',
        marginTop:10,
        marginLeft:10
    },
    text3:{
        fontSize:20,
        color:'black',
        marginTop:20,
        marginLeft:10
    },
    heart:{
        width:10,
        height:9,
        tintColor:'#028090'
    },
    favorite:{
        width:16,
        height:16,
        borderRadius:16,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    text5:{
        fontSize:12,
        color:'#7B8387',
        marginTop:10,
        marginLeft:20
    },
    line1:{
        width:103,
        height:4,
        backgroundColor:'#028090'
    },
    line2:{
        width:16,
        height:4,
        backgroundColor:'#DADADA'
    },
    star:{
        width:20,
        height:19,
        marginTop:10,
        marginHorizontal:3
    },
    star1:{
        width:20,
        height:19,
        tintColor:'#028090',
        marginTop:10,
        marginHorizontal:3
    },
    akif:{
        width:25,
        height:25,
        borderRadius:25,
        marginLeft:10,
        marginTop:10
    },
    name:{
        fontSize:11,
        color:'black',
        fontWeight:'bold',
        marginLeft:10,
        marginTop:15
    },
    star2:{
        width:7,
        height:7,
        tintColor:'#028090',
        marginTop:10,
        marginHorizontal:3
    },
    star3:{
        width:7,
        height:7,
        marginTop:10,
        marginHorizontal:3
    },
    date:{
        fontSize:6,
        color:'#7B8387',
        marginTop:10,
        marginLeft:10
    },
    text6:{
        fontSize:12,
        color:'#7B8387',
        marginTop:10,
        marginLeft:20,
        
    },
    container1:{
        width:19,
        height:9,
        backgroundColor:'white',
        borderWidth:0.2,
        borderColor:'#028090',
        borderRadius:2,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        marginHorizontal:3
    },
    text7:{
        fontSize:6,
        color:'#7B8387'
    },
    btn1:{
        width:169,
        height:41,
        borderRadius:5,
        backgroundColor:'#028090',
        justifyContent:'center',
        alignItems:'center'
    },
    btn2:{
        width:80,
        height:41,
        borderRadius:5,
        backgroundColor:'#028090',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10
    },
    btn3:{
        width:80,
        height:41,
        borderRadius:5,
        backgroundColor:'#028090',
        justifyContent:'center',
        alignItems:'center'
    }
})