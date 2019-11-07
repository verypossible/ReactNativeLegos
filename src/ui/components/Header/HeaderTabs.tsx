import React, { Fragment } from 'react'
import { NavigationScreenProp } from 'react-navigation'
import styled from 'styled-components/native'

import Header from './Header'
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
    <Fragment>
      <Header>
        <HeaderTitle title="Title" />
      </Header>

      <TabContainer>
        <HeaderTabItem
          label="Tab One"
          isActive={navigation.state.index === 0}
          onPress={() => navigation.navigate('Potato')}
        />
        <HeaderTabItem
          label="Tab Two"
          isActive={navigation.state.index === 1}
          onPress={() => navigation.navigate('Two')}
        />
      </TabContainer>
    </Fragment>
  )
}

export default HeaderTabs
