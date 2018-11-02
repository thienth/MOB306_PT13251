import React from 'react';
import { StyleSheet, 
        Text, 
        View,
        Image,
        TextInput,
        TouchableOpacity } from 'react-native';
import Item from './components/ItemComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 0,
      listItem: [
        {
          itemId: 1,
          itemName: 'Apple Iphone 6',
          price: 3000
        },
        {
          itemId: 2,
          itemName: 'Samsung Galaxy s7',
          price: 3500
        },
        {
          itemId: 3,
          itemName: 'Oppo F1s',
          price: 1500
        },
        {
          itemId: 4,
          itemName: 'Bphone 3',
          price: 2000
        }
      ]
    };
  }
  componentDidMount() {
    var count = 0;
    var that = this;
    setInterval(function(){
      that.setState({content: count});
      count++;
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.listItem.map(
          (item) => <Item itemInfo={item}/>
        )}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
