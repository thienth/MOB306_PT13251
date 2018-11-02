import React from 'react';
import { StyleSheet, 
        Text, 
        View } from 'react-native';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Mã SP: {this.props.itemInfo.itemId}</Text>
        <Text>Tên SP: {this.props.itemInfo.itemName}</Text>
        <Text>Giá: {this.props.itemInfo.price}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
