import React from 'react'
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from 'react-navigation-tabs'

import { HeaderTabs } from 'ui/components'
import { DemoHeaderTabsOne, DemoHeaderTabsTwo } from 'ui/screens'
import theme from 'ui/theme'

const Routes = {
  Kitties: DemoHeaderTabsOne,
  Doggies: DemoHeaderTabsTwo,
}

const DemoHeaderTabs = createMaterialTopTabNavigator(Routes, {
  initialRouteName: 'Kitties',
  tabBarComponent: props => (
    <>
      <HeaderTabs>
        <MaterialTopTabBar {...props} />
      </HeaderTabs>
    </>
  ),
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: 'black',
    inactiveTintColor: 'black',
    upperCaseLabel: false,
    style: {
      width: '100%',
      backgroundColor: 'transparent',
    },
    tabStyle: {
      width: theme.screen.width / 2,
      position: 'relative',
    },
    labelStyle: {
      fontSize: 15,
      color: 'rgba(0, 0, 0, 0.92)',
    },
    indicatorStyle: {
      height: 3,
      backgroundColor: 'black',
    },
  },
})

export default DemoHeaderTabs
