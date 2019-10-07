import React from 'react';
import {StyleSheet, Text, View,Platform, Dimensions,Image,StatusBar} from 'react-native';
import { Images, Profiles } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image
            style = {{height : 28, width:28,marginLeft:10, tintColor:'#C5C5C5'}}
            source = {require('./App/Images/settings.png')}
            resizeMode = 'contain'
          />
          <Image
            style = {{height:200,width:100}}
            source = {require('./App/Images/tinder-logo.png')}
            resizeMode = 'contain'
          />
          <Image
            style = {{height : 28, width:28,marginRight:10, tintColor:'#C5C5C5'}}
            source = {require('./App/Images/chatting.png')}
            resizeMode = 'contain'
          />
        </View>
        <View style = {styles.profileView}>
          <Image
            style = {styles.profileImageStyle}
            source = {require('./App/Images/Profiles/harold.jpg')}
            resizeMode = 'contain'
          />
          <View
            style = {{borderBottomRightRadius:10, borderBottomLeftRadius:10,margin:10}}>
            <Text>
              <Text style = {{fontSize:24, fontWeight:'bold'}}>Harold,</Text>
              <Text style = {{fontSize:24}}>65</Text>
            </Text>
            <Text style = {{fontSize:16, color:'grey'}}>
              Internet meme
            </Text>
          </View>
        </View>
        <View style = {styles.bottomBar}>
          <View style = {styles.smallbuttons}>
            <Image
              style = {{height:25,width:25}}
              source = {require('./App/Images/rewind.png')}
              resizeMode = 'contain'
            />
          </View>
          <View style = {styles.bigbuttons}>
            <Image
              style = {{height:30,width:30}}
              source = {require('./App/Images/nope.png')}
              resizeMode = 'contain'
            />
          </View>
          <View style = {styles.smallbuttons}>
            <Image
              style = {{height:25,width:25}}
              source = {require('./App/Images/boost.png')}
              resizeMode = 'contain'
            />
          </View>
          <View style = {styles.bigbuttons}>
            <Image
              style = {{height:30,width:30}}
              source = {require('./App/Images/like.png')}
              resizeMode = 'contain'
            />
          </View>
          <View style = {styles.smallbuttons}>
            <Image
              style = {{height:25,width:25}}
              source = {require('./App/Images/super-like.png')}
              resizeMode = 'contain'
            />
          </View>
        </View>
      </View>
    );
  }
}

var { heiht, width } = Dimensions.get('window');
var statusBarHeight = StatusBar.currentHeight;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor : '#f0f0f0'
  },
  navbar: {
    height: Platform.OS === 'ios' ? 56 : 44,
    marginTop: Platform.OS === 'ios' ? 33 :statusBarHeight,
    width : width,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor : 'white',
    borderBottomWidth : 0.5,
    borderColor : 'grey'
  },
  profileView:{
    width: width*0.9,
    flexDirection:'column',
    borderColor: 'grey',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },
  profileImageStyle:{
    width: '100%',
    height: width*0.9,
  },
  bottomBar:{
    width: width,
    flexDirection : 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  smallbuttons : {
    backgroundColor : 'white',
    height: 40,
    width:40,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  bigbuttons : {
    backgroundColor : 'white',
    height: 55,
    width:55,
    borderRadius: 27.5,
    alignItems:'center',
    justifyContent:'center'
  }
});
