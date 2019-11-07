import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { TabNavItem } from 'ui/components'
import { DemoComponents, DemoFlows } from 'ui/screens'

const Routes = {
  TabOne: {
    screen: DemoComponents,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabNavItem label="🦄" active={focused} fontStyle={{ fontSize: 30 }} />
      ),
    },
  },
  TabTwo: {
    screen: DemoFlows,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabNavItem label="🧙‍♂️" active={focused} fontStyle={{ fontSize: 30 }} />
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
