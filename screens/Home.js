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

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
    // this.getListCate = this.getListCate.bind(this);
    // this.removeCategoryById = this.removeCategoryById.bind(this);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
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
          first: FirstRoute,
          second: SecondRoute,
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