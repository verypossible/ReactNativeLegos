import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AppTabNav from './AppTabNav';

import {DoggiesDetail, KittiesDetail} from 'ui/screens';

// assign screen components to route name
// every screen/stack defined here has the 'navigation: any' prop passed down to it
const Routes = {
  Main: AppTabNav,
  DoggiesDetail: DoggiesDetail,
  KittiesDetail: KittiesDetail,
};

// create AppNavigator
const AppNavigator = createStackNavigator(Routes, {
  // navigator config options
  initialRouteName: 'Main',
  headerMode: 'none',
});

// This component is placed in App.js
// and it renders all of our screens with our configs above
export default createAppContainer(AppNavigator);
