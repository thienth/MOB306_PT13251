import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      TouchableOpacity
    } from 'react-native';

export default class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
    this.goToCate = this.goToCate.bind(this);
    
  }
  static navigationOptions = {
      title: 'Trang chủ',
  };

  goToCate(){
    this.props.navigation.navigate('Category');
  }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={this.goToCate}>
          <Text>Goto category screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
