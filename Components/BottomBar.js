import React from 'react';
import {StyleSheet, View, Dimensions,Image} from 'react-native';

export default class BottomBar extends React.Component {
  render() {
    return (
      <View style = {styles.bottomBar}>
        <View style = {styles.smallbuttons}>
          <Image
            style = {{height:25,width:25}}
            source = {require('../App/Images/rewind.png')}
            resizeMode = 'contain'
          />
        </View>
        <View style = {styles.bigbuttons}>
          <Image
            style = {{height:30,width:30}}
            source = {require('../App/Images/nope.png')}
            resizeMode = 'contain'
          />
        </View>
        <View style = {styles.smallbuttons}>
          <Image
            style = {{height:25,width:25}}
            source = {require('../App/Images/boost.png')}
            resizeMode = 'contain'
          />
        </View>
        <View style = {styles.bigbuttons}>
          <Image
            style = {{height:30,width:30}}
            source = {require('../App/Images/like.png')}
            resizeMode = 'contain'
          />
        </View>
        <View style = {styles.smallbuttons}>
          <Image
            style = {{height:25,width:25}}
            source = {require('../App/Images/super-like.png')}
            resizeMode = 'contain'
          />
        </View>
      </View>
    );
  }
}

var { heiht, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  bottomBar:{
    width: width,
    height: 70,
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
