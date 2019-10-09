import React from 'react';
import {StyleSheet, Text, View,Platform, Dimensions,Image,SafeAreaView} from 'react-native';
import { Images, Profiles } from './App/Themes';
import NavBar from './Components/NavBar';
import ProfileView from './Components/ProfileView';
import BottomBar from './Components/BottomBar';

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
    if (Platform.OS === 'ios'){
      return (
        <SafeAreaView style={styles.container}>
          <NavBar/>
          <ProfileView/>
          <BottomBar/>
        </SafeAreaView>
      );
    } else {
      return (
        <View style={styles.container}>
          <NavBar/>
          <ProfileView/>
          <BottomBar/>
        </View>
      );
    }
  }
}

var { heiht, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor : '#f0f0f0'
  },
});
