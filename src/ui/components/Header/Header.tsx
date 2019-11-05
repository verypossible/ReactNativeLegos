import React from 'react'
import styled from 'styled-components/native'

import { StatusBar } from 'react-native'
import theme from 'ui/theme'

interface HeaderProps {
  backgroundColor?: any
  barStyle?: 'dark-content' | 'light-content'
  children?: React.ReactNode
  style?: any
}

const SafetyWrap = styled.SafeAreaView`
  background-color: ${({ backgroundColor }: HeaderProps) =>
    backgroundColor ? backgroundColor : 'white'};
`

const Layout = styled.View`
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 60;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: ${theme.zIndex.header};
`

const HeaderGuts = styled.View`
  align-self: flex-end;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`

const Header: React.FC<HeaderProps> = ({
  backgroundColor,
  barStyle = 'dark-content',
  children,
  style,
}) => (
  <React.Fragment>
    <StatusBar barStyle={barStyle} />

    <SafetyWrap backgroundColor={backgroundColor}>
      <Layout style={style}>
        <HeaderGuts>{children}</HeaderGuts>
      </Layout>
    </SafetyWrap>
  </React.Fragment>
)

export default Header
