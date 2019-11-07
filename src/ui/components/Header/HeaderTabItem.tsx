import React from 'react'
import styled from 'styled-components/native'

import { Text } from '../Typography'

interface HeaderTabItemProps {
  label?: string
  isActive?: boolean
  onPress?: () => void
  style?: any
}

const Layout = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Label = styled(Text)`
  color: ${({ isActive }: HeaderTabItemProps) =>
    isActive ? 'green' : 'black'};
`

const HeaderTabItem: React.FC<HeaderTabItemProps> = ({
  label,
  isActive = false,
  onPress,
  style,
}) => {
  return (
    <Layout style={style} isActive={isActive} onPress={onPress}>
      <Label isActive={isActive}>{label}</Label>
    </Layout>
  )
}

export default HeaderTabItem
