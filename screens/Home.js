import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      TouchableOpacity
    } from 'react-native';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAabdUQr1CPiz5WsxdM3IwNwy_SJRbCHXA",
    authDomain: "pt13251-b9727.firebaseapp.com",
    databaseURL: "https://pt13251-b9727.firebaseio.com",
    projectId: "pt13251-b9727",
    storageBucket: "pt13251-b9727.appspot.com",
    messagingSenderId: "168582052372"
};
export default class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
    this.getListCate = this.getListCate.bind(this);
    firebase.initializeApp(config);
    this.state = {
      categories: []
    }
  }
  static navigationOptions = {
      title: 'Trang chủ',
  };

  componentDidMount() {
    this.getListCate();
  }

  getListCate(){
    var that = this;
    firebase.database().ref('categories/').on('value', function (snapshot) {
        that.setState({categories: snapshot.val()});
    });
  }

  render() {
    return (
      <View >
        {this.state.categories.map( item => 
          <View key={item.id}>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
      </View>
    );
  }
}
