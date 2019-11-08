import React from 'react'
import styled from 'styled-components/native'

import theme from 'ui/theme'
import { Icon } from '../Icon'
import { Text } from '../Typography'

interface ListItemProps {
  label?: string
  onPress?: () => void
  style?: any
}

const Layout = styled.TouchableOpacity`
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60;
  position: relative;
  padding: 0 20px;
  border-bottom-width: 1;
  border-bottom-color: #dedede;
`

const Label = styled(Text)``

const IconContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  width: 12;
  height: 100%;
  margin-left: 20;
  opacity: 0.92;
`

const ListItem: React.FC<ListItemProps> = ({ label, onPress, style }) => {
  return (
    <Layout
      style={style}
      onPress={onPress}
      activeOpacity={theme.button.activeOpacity}
    >
      <Label>{label}</Label>
      <IconContainer>
        <Icon width={12} height={12} icon="NavForward" />
      </IconContainer>
    </Layout>
  )
}

export default ListItem
