import React from 'react'
import styled from 'styled-components/native'

import { View } from 'react-native'

interface ScreenContainerProps {
  children: React.ReactNode
  style?: any
}

const Layout = styled(View)`
  width: 100%;
  height: 100%;
  position: relative;
  background: #dedede;
`

const ScreenContainer: React.SFC<ScreenContainerProps> = ({
  children,
  style,
}) => {
  return <Layout style={style} children={children} />
}

export default ScreenContainer
