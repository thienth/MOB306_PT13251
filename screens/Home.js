import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View
    } from 'react-native';

export default class HomeScreen extends React.Component{

  static navigationOptions = {
      title: 'Trang chủ',
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
