import React from 'react'
import styled from 'styled-components/native'

import theme from 'ui/theme'
import { Text } from '../Typography'

interface ListItemProps {
  label?: string
  onPress?: () => void
  style?: any
}

const Layout = styled.TouchableOpacity`
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60;
  position: relative;
  padding: 0 20px;
  border-bottom-width: 1;
  border-bottom-color: #dedede;
`

const Label = styled(Text)``

const ListItem: React.FC<ListItemProps> = ({ label, onPress, style }) => {
  return (
    <Layout
      style={style}
      onPress={onPress}
      activeOpacity={theme.button.activeOpacity}
    >
      <Label>{label}</Label>
    </Layout>
  )
}

export default ListItem
