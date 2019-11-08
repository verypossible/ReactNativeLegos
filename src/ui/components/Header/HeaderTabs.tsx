import React from 'react'
import { NavigationScreenProp } from 'react-navigation'

import Header from './Header'
import HeaderAccessory from './HeaderAccessory'
import HeaderTitle from './HeaderTitle'

interface HeaderTabsProps {
  navigation?: NavigationScreenProp<any, any>
  children?: React.ReactNode
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ navigation, children }) => {
  return (
    <>
      <Header>
        <HeaderAccessory
          position="left"
          icon="NavBack"
          // TODO goBack is not working
          onPress={() => navigation && navigation.goBack()}
        />
        <HeaderTitle title="Header w/ Tabs" />
      </Header>

      {children}
    </>
  )
}

export default HeaderTabs
