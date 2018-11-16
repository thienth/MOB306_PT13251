import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      TextInput,
      TouchableOpacity
    } from 'react-native';
import firebaseConf from '../lib/firebaseConfig';


export default class AddCate extends React.Component{

  static navigationOptions = {
      title: 'Thêm danh mục',
  };
  constructor(props){

    super(props);
    this.createNewCategory = this.createNewCategory.bind(this);
    this.state = {
      name: ""
    }
  }

  createNewCategory(){
    var data = {
      name: this.state.name
    }
    // lay key moi
    var newCateKey = firebaseConf.database().ref().child('categories').push().key;
    var updates = {};
    updates['/categories/' + newCateKey] = data;
    if(firebaseConf.database().ref().update(updates)){
      this.props.navigation.navigate('Home');
    }else{
      alert('Tạo mới không thành công')
    }
  }
  render() {
    return (
      <View>
        <Text>Tên danh mục</Text>
        <TextInput onChangeText={(value) => this.setState({name: value})} placeholder="Nhập tên danh mục"/>
        <TouchableOpacity onPress={this.createNewCategory}>
          <Text>Lưu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}