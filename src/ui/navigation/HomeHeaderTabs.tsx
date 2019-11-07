import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import { HeaderTabs } from 'ui/components'
import { Potato, TabTwo } from 'ui/screens'

const Routes = {
  Potato: Potato,
  Two: TabTwo,
}

const HomeHeaderTabs = createMaterialTopTabNavigator(Routes, {
  initialRouteName: 'Potato',
  tabBarComponent: HeaderTabs,
})

export default HomeHeaderTabs
