import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { TabNavItem } from 'ui/components'
import { DemoComponents, DemoFlows } from 'ui/screens'

const Routes = {
  TabOne: {
    screen: DemoComponents,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabNavItem icon="NavComponents" active={focused} />
      ),
    },
  },
  TabTwo: {
    screen: DemoFlows,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabNavItem icon="NavFlows" active={focused} />
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
      height: 60,
      backgroundColor: 'white',
      borderTopWidth: 0.5,
      borderTopColor: '#dedede',
    },
  },
}

const AppTabNav = createBottomTabNavigator(Routes, TabBarConfig)

export default AppTabNav
