import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import { HeaderTabs } from 'ui/components'
import { DemoHeaderTabsOne, DemoHeaderTabsTwo } from 'ui/screens'

const Routes = {
  HeaderTab1: DemoHeaderTabsOne,
  HeaderTab2: DemoHeaderTabsTwo,
}

const DemoHeaderTabs = createMaterialTopTabNavigator(Routes, {
  initialRouteName: 'HeaderTab1',
  tabBarComponent: HeaderTabs,
})

export default DemoHeaderTabs
