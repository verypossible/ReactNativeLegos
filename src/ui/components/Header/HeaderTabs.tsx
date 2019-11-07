import React from 'react'
import { NavigationScreenProp } from 'react-navigation'
import styled from 'styled-components/native'

import Header from './Header'
import HeaderAccessory from './HeaderAccessory'
import HeaderTabItem from './HeaderTabItem'
import HeaderTitle from './HeaderTitle'

interface HeaderTabsProps {
  navigation: NavigationScreenProp<any, any>
}

const TabContainer = styled.View`
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50;
`

const HeaderTabs: React.FC<HeaderTabsProps> = ({ navigation }) => {
  return (
    <>
      <Header>
        <HeaderAccessory
          position="left"
          icon="NavBack"
          onPress={() => navigation.goBack()}
        />
        <HeaderTitle title="Header w/ Tabs" />
      </Header>

      <TabContainer>
        <HeaderTabItem
          label="😻"
          isActive={navigation.state.index === 0}
          onPress={() => navigation.navigate('HeaderTab1')}
        />
        <HeaderTabItem
          label="🐶"
          isActive={navigation.state.index === 1}
          onPress={() => navigation.navigate('HeaderTab2')}
        />
        <HeaderTabItem
          label="🦖"
          isActive={navigation.state.index === 2}
          onPress={() => navigation.navigate('HeaderTab3')}
        />
      </TabContainer>
    </>
  )
}

export default HeaderTabs
