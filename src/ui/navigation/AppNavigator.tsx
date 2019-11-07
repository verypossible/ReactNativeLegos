import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import AppTabNav from './AppTabNav'
import HomeHeaderTabs from './HomeHeaderTabs'

import { AuthLogin, HomeDetail } from 'ui/screens'

// assign screen components to route name
// every screen/stack defined here has the 'navigation: any' prop passed down to it
const Routes = {
  Auth: AuthLogin,
  Home: AppTabNav,
  HomeDetail,
}

// create AppNavigator
const AppNavigator = createStackNavigator(Routes, {
  // navigator config options
  initialRouteName: 'Auth',
  headerMode: 'none',
})

// This component is placed in App.js
// and it renders all of our screens with our configs above
export default createAppContainer(AppNavigator)
