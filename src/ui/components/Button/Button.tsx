import React from 'react'
import styled from 'styled-components/native'

import { Text, TouchableOpacity } from 'react-native'
import theme from 'ui/theme'

const noop = () => {}

interface ButtonProps {
  type: 'border' | 'fill' | 'transparent'
  label: string
  size?: 'default' | 'small'
  width?: number | string
  disabled?: boolean
  onPress?: () => void
  style?: any
}

const getBackgroundColor = ({ type }: LayoutProps) => {
  if (type === 'border') {
    return 'transparent'
  }
  if (type === 'transparent') {
    return 'transparent'
  }
  return 'black'
}

interface LayoutProps {
  type: 'border' | 'fill' | 'transparent'
  size: 'default' | 'small'
  width: number | string
  disabled: boolean
  onPress: () => void
  style: any
}

const Layout = styled(TouchableOpacity)<LayoutProps>`
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ size }) =>
    size === 'default'
      ? theme.button.height.default
      : theme.button.height.small};
  background: ${getBackgroundColor};
  border-radius: ${({ size }) =>
    size === 'default'
      ? theme.button.height.default / 2
      : theme.button.height.small / 2};
  border-width: ${({ type }) => (type === 'border' ? 1.25 : 0)};
  border-color: ${({ type }) =>
    type === 'transparent' ? 'transparent' : 'black'};
  opacity: ${({ disabled }) => (disabled ? 0.25 : 1)};
`

const Label = styled(Text)<Partial<ButtonProps>>`
  align-self: center;
  font-family: ${theme.font.ui.bold};
  font-size: ${({ size }) =>
    size === 'default' ? theme.font.size.default : theme.font.size.small};
  text-align: center;
  color: ${({ type }) => (type === 'fill' ? 'white' : 'black')};
`

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  size = 'default',
  width = '100%',
  disabled = false,
  onPress = noop,
  style = {},
}) => {
  return (
    <Layout
      type={type}
      size={size}
      width={width}
      disabled={disabled}
      onPress={disabled ? noop : onPress}
      activeOpacity={theme.button.activeOpacity}
      style={style}
      testID="button"
    >
      <Label type={type} size={size}>
        {label}
      </Label>
    </Layout>
  )
}

export default Button
