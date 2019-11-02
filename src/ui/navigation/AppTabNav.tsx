import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {TabNavItem} from 'ui/components';
import {Doggies, Kitties} from 'ui/screens';

const Routes = {
  Doggies: {
    screen: Doggies,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <TabNavItem label="🐕" active={focused} fontStyle={{fontSize: 20}} />
      ),
    },
  },
  Kitties: {
    screen: Kitties,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <TabNavItem label="🐈" active={focused} fontStyle={{fontSize: 20}} />
      ),
    },
  },
};

const TabBarConfig = {
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    style: {
      backgroundColor: 'white',
    },
  },
};

const AppTabNav = createBottomTabNavigator(Routes, TabBarConfig);

export default AppTabNav;
