import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import { HeaderTabs } from 'ui/components'
import {
  DemoHeaderTabsOne,
  DemoHeaderTabsThree,
  DemoHeaderTabsTwo,
} from 'ui/screens'

const Routes = {
  HeaderTab1: DemoHeaderTabsOne,
  HeaderTab2: DemoHeaderTabsTwo,
  HeaderTab3: DemoHeaderTabsThree,
}

const DemoHeaderTabs = createMaterialTopTabNavigator(Routes, {
  initialRouteName: 'HeaderTab1',
  tabBarComponent: HeaderTabs,
})

export default DemoHeaderTabs
