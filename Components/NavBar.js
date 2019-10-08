import React from 'react';
import {View, Image ,Dimensions,StyleSheet, Platform} from 'react-native'

export default class NavBar extends React.Component{
  render(){
    return(
      <View style={styles.navbar}>
        <Image
          style = {{height : 28, width:28,marginLeft:10, tintColor:'#C5C5C5'}}
          source = {require('../App/Images/settings.png')}
          resizeMode = 'contain'
        />
        <Image
          style = {{height:200,width:90}}
          source = {require('../App/Images/tinder-logo.png')}
          resizeMode = 'contain'
        />
        <Image
          style = {{height : 28, width:28,marginRight:10, tintColor:'#C5C5C5'}}
          source = {require('../App/Images/chatting.png')}
          resizeMode = 'contain'
        />
      </View>
    );
  }
}

var { heiht, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  navbar: {
    height: Platform.OS === 'ios' ? 56 : 44,
    //marginTop: Platform.OS === 'ios' ? 33 :statusBarHeight,
    width : width,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomWidth : 0.5,
    borderColor : 'grey'
  }
});
