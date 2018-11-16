import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      TouchableOpacity,
      ActivityIndicator
    } from 'react-native';
import firebaseConf from '../lib/firebaseConfig';
export default class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
    this.getListCate = this.getListCate.bind(this);
    this.removeCategoryById = this.removeCategoryById.bind(this);
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
    firebaseConf.database().ref('categories/').on('value', function (snapshot) {
        let cates = [];
        snapshot.forEach((child) => {

          let item = {
            key: child.key,
            name: child.val().name
          }
          cates.push(item);
        });

        that.setState({categories: cates});
    });
  }

  removeCategoryById(cateId){
    firebaseConf.database().ref('categories/' + cateId).remove();
  }

  render() {
    var indicatorView = <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>;

    var listCateView = <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCate')}>
                <Text>Thêm danh mục</Text>
              </TouchableOpacity>
              {this.state.categories.map( item => 
                <View key={item.key}>
                  <Text>{item.name}</Text> 
                  <TouchableOpacity onPress={() => this.removeCategoryById(item.key)}>
                    <Text>Xoá</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => 
                    this.props.navigation.navigate('EditCate', {item})
                  }>
                    <Text>Cập nhật</Text>
                  </TouchableOpacity>
                </View>
              )}
    </View>;
    return this.state.categories.length == 0 ? indicatorView : listCateView;
  }
}

/*

 */