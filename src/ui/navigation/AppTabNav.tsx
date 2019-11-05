import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { TabNavItem } from 'ui/components'
import { HomeTabOne, HomeTabTwo } from 'ui/screens'

const Routes = {
  TabOne: {
    screen: HomeTabOne,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabNavItem label="TabOne" active={focused} />
      ),
    },
  },
  TabTwo: {
    screen: HomeTabTwo,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabNavItem label="TabTwo" active={focused} />
      ),
    },
  },
}

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
}

const AppTabNav = createBottomTabNavigator(Routes, TabBarConfig)

export default AppTabNav
