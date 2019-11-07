import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { AuthLogin } from 'ui/screens'
import AppTabNav from './AppTabNav'
import DemoHeaderTabs from './DemoHeaderTabs'

// assign screen components to route name
// every screen/stack defined here has the 'navigation: any' prop passed down to it
const Routes = {
  Auth: AuthLogin,
  Demo: AppTabNav,
  DemoHeaderTabs,
}

// create AppNavigator
const AppNavigator = createStackNavigator(Routes, {
  // navigator config options
  initialRouteName: 'Demo',
  headerMode: 'none',
})

// This component is placed in App.js
// and it renders all of our screens with our configs above
export default createAppContainer(AppNavigator)
