import React from 'react'
import styled from 'styled-components/native'

import { SafeAreaView, View } from 'react-native'

interface ScreenContentProps {
  children?: React.ReactNode
  style?: any
}

// SafeAreaView doesn't respect the padding right/left
// so we nest a standard View inside to deal with it
const Safety = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
`

const Layout = styled(View)`
  flex: 1;
  width: 100%;
  position: relative;
`

const ScreenContent: React.SFC<ScreenContentProps> = ({ children, style }) => {
  return (
    <Safety>
      <Layout style={style} children={children} />
    </Safety>
  )
}

export default ScreenContent
