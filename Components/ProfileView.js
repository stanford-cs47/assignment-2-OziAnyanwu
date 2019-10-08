import React from 'react';
import {StyleSheet, Text, View, Dimensions,Image} from 'react-native';

export default class ProfileView extends React.Component{
  render() {
    return (
      <View style = {styles.profileView}>
        <Image
          style = {styles.profileImageStyle}
          source = {require('../App/Images/Profiles/harold.jpg')}
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
    );
  }
}

var { heiht, width } = Dimensions.get('window');
const styles = StyleSheet.create({
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
  }
});
