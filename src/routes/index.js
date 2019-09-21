import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {CustomDrawerNavigator} from './drawers';
import Home from '../screens/home';
import List from '../screens/list';
import SingleProduct from '../screens/singleProduct';

const MainNavigator = createDrawerNavigator(
  {
    HOME: Home,
    LIST: List,
    SINGLEPRODUCT: SingleProduct,
  },
  {
    contentComponent: CustomDrawerNavigator,
    initialRouteName: 'HOME',
    drawerWidth: 250,
    drawerBackgroundColor: '#00bfff',
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: '#00bfff',
      inactiveBackgroundColor: '#00bfff',
      itemsContainerStyle: {
        marginVertical: 0,
        alignItems: 'center',
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
  },
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;
