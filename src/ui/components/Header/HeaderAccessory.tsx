import React from 'react'
import styled from 'styled-components/native'

import { Text, TouchableOpacity, View } from 'react-native'
import theme from 'ui/theme'
import { Icon, IconTypes } from '../Icon'

interface HeaderAccessoryProps {
  label?: string
  icon?: IconTypes
  position: 'left' | 'right'
  onPress?: () => void
  style?: any
}

const AccessoryWrap = styled(TouchableOpacity)`
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0 15px;
  position: absolute;
  right: ${({ position }: HeaderAccessoryProps) =>
    position === 'right' ? 0 : 'auto'};
  left: ${({ position }: HeaderAccessoryProps) =>
    position === 'left' ? 0 : 'auto'};
  bottom: 0;
  z-index: 101;
`

const IconWrap = styled(View)`
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const AccessoryLabel = styled(Text)`
  padding-top: 5;
  font-family: ${theme.font.ui.regular};
  font-size: ${theme.font.size.small};
  letter-spacing: 0.25px;
  color: black;
`

const HeaderAccessory: React.FC<HeaderAccessoryProps> = ({
  label,
  icon,
  position,
  onPress,
  style,
}) => {
  return (
    <AccessoryWrap
      position={position}
      onPress={onPress}
      activeOpacity={theme.button.touchOpacity}
      style={style}
    >
      {icon ? (
        <IconWrap>
          <Icon icon={icon} fill="black" width={20} height={20} />
        </IconWrap>
      ) : null}

      {label ? (
        <AccessoryLabel position={position}>{label}</AccessoryLabel>
      ) : null}
    </AccessoryWrap>
  )
}

export default HeaderAccessory
