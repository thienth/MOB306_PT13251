import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/Home';
import CategoryScreen from './screens/Categories';
const RootStack = createStackNavigator({
    Home: HomeScreen,
    Category: CategoryScreen,
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

