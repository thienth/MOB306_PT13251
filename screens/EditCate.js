import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      TextInput,
      TouchableOpacity
    } from 'react-native';
import firebaseConf from '../lib/firebaseConfig';


export default class EditCate extends React.Component{

  static navigationOptions = {
      title: 'Sửa danh mục danh mục',
  };
  constructor(props){

    super(props);
    this.state = this.props.navigation.getParam('item');
    this.updateCategory = this.updateCategory.bind(this);
    
  }

  updateCategory(){
    
    var updates = {};
    updates['/categories/' + this.state.key] = {name: this.state.name};
    if(firebaseConf.database().ref().update(updates)){
      this.props.navigation.navigate('Home');
    }else{
      alert('Cập nhật không thành công')
    }
  }
  render() {
    return (
      <View>
        <Text>Tên danh mục</Text>
        <TextInput value={this.state.name} onChangeText={(value) => this.setState({name: value})} placeholder="Nhập tên danh mục"/>
        <TouchableOpacity onPress={this.updateCategory}>
          <Text>Lưu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}