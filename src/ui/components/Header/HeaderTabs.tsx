import React from 'react'
import { NavigationScreenProp } from 'react-navigation'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components/native'

import Header from './Header'
import HeaderAccessory from './HeaderAccessory'
import HeaderTabItem from './HeaderTabItem'
import HeaderTitle from './HeaderTitle'

import theme from 'ui/theme'

interface HeaderTabsProps {
  numberOfTabs: number
  navigation: NavigationScreenProp<any, any>
}

const TabContainer = styled.View`
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50;
`

const IndicatorBar = styled.View`
  width: 100%;
  height: 4;
  position: relative;
  background-color: white;
`

const Indicator = styled.View`
  width: ${({ numberOfTabs }: HeaderTabsProps) =>
    numberOfTabs && theme.screen.width / numberOfTabs};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
`

const AnimatedIndicator = animated(Indicator)

const HeaderTabs: React.FC<HeaderTabsProps> = ({
  numberOfTabs = 2,
  navigation,
}) => {
  const routeIndex = navigation.state.index
  const indicatorAnimation = useSpring({
    to: { left: routeIndex === 0 ? 0 : theme.screen.width / numberOfTabs },
  })

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
          isActive={routeIndex === 0}
          onPress={() => navigation.navigate('HeaderTab1')}
        />
        <HeaderTabItem
          label="🐶"
          isActive={routeIndex === 1}
          onPress={() => navigation.navigate('HeaderTab2')}
        />
      </TabContainer>

      <IndicatorBar>
        <AnimatedIndicator
          numberOfTabs={numberOfTabs}
          style={indicatorAnimation}
        />
      </IndicatorBar>
    </>
  )
}

export default HeaderTabs
