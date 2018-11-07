import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View
    } from 'react-native';

export default class CategoryScreen extends React.Component{

  static navigationOptions = {
      title: 'Danh sách bài viết',
  };
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View>
        <Text>Category</Text>
      </View>
    );
  }
}