import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      TouchableOpacity,
      ActivityIndicator,
      Dimensions
    } from 'react-native';

import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import firebaseConf from '../lib/firebaseConfig';
import ListPost from '../components/ListPost';
import ListCategory from '../components/ListCategory';
import Contact from '../components/Contact';


export default class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
    // this.getListCate = this.getListCate.bind(this);
    // this.removeCategoryById = this.removeCategoryById.bind(this);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Bài viết' },
        { key: 'second', title: 'Danh mục' },
        { key: 'third', title: 'Liên hệ' },
      ]
    }
  }
  static navigationOptions = {
      title: 'Trang chủ',
  };

  componentDidMount() {
    // this.getListCate();
    
  }

  // getListCate(){
  //   var that = this;
  //   firebaseConf.database().ref('categories/').on('value', function (snapshot) {
  //       let cates = [];
  //       snapshot.forEach((child) => {

  //         let item = {
  //           key: child.key,
  //           name: child.val().name
  //         }
  //         cates.push(item);
  //       });

  //       that.setState({categories: cates});
  //   });
  // }

  render() {
    // return this.state.categories.length == 0 ? indicatorView : listCateView;
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: ListPost,
          second: ListCategory,
          third: Contact,
        })}
        onIndexChange={index => this.setState({index})}
        initialLayout={{ width: Dimensions.get('window').width }}
      />

    );
    
  }
}
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});