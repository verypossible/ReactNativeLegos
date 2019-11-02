import React from 'react'
import styled from 'styled-components/native'

import { Text, View } from 'react-native'
import theme from 'ui/theme'

interface HeaderTitleProps {
  title: string
}

const Layout = styled(View)`
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
`

const Title = styled(Text)`
  font-family: ${theme.font.ui.bold};
  font-size: ${theme.font.size.large};
  color: black;
`

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return (
    <Layout>
      <Title>{title}</Title>
    </Layout>
  )
}

export default HeaderTitle
