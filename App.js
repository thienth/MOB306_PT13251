import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/Home';
import CategoryScreen from './screens/Categories';
import AddCate from './screens/AddCate';
import EditCate from './screens/EditCate';
const RootStack = createStackNavigator({
    Home: HomeScreen,
    Category: CategoryScreen,
    AddCate: AddCate,
    EditCate: EditCate,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

