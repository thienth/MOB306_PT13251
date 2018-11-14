import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      TouchableOpacity
    } from 'react-native';
import THIENTHCHILD from './thienthChild';
export default class THIENTH extends React.Component{
  constructor(props) {
    super(props);
    
  }
  static navigationOptions = {
      title: 'Trang thienth',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>THIENTH</Text>
        <THIENTHCHILD />
      </View>
    );
  }
}
