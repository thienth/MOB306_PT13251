import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      TouchableOpacity
    } from 'react-native';
import { withNavigation } from 'react-navigation';
class THIENTHCHILD extends React.Component{
  constructor(props) {
    super(props);
    
  }
  static navigationOptions = {
      title: 'Trang thienth',
  };


  render() {
    return (
      <View style={{flex: 1}}>
        <Text>THIENTH CHILD</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')}>
          <Text style={{ color: 'red'}}>Click to go</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(THIENTHCHILD);
