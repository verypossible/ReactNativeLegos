import React from 'react'
import styled from 'styled-components/native'

import { Text, TouchableOpacity } from 'react-native'
import theme from 'ui/theme'

interface ButtonProps {
  size: 'default' | 'small'
  type: 'border' | 'fill' | 'transparent'
  label: string
  width?: number
  disabled?: boolean
  onPress?: () => void
  style?: any
}

const getBackgroundColor = ({ type }: ButtonProps) => {
  if (type === 'border') {
    return 'transparent'
  }
  if (type === 'transparent') {
    return 'transparent'
  }
  return 'black'
}

const Layout = styled(TouchableOpacity)`
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: ${({ width }: ButtonProps) => (width ? width : '100%')};
  height: ${({ size }: ButtonProps) =>
    size === 'default'
      ? theme.button.height.default
      : theme.button.height.small};
  background: ${getBackgroundColor};
  border-radius: ${({ size }: ButtonProps) =>
    size === 'default'
      ? theme.button.height.default / 2
      : theme.button.height.small / 2};
  border-width: ${({ type }: ButtonProps) => (type === 'border' ? 1.25 : 0)};
  border-color: ${({ type }: ButtonProps) =>
    type === 'transparent' ? 'transparent' : 'black'};
  opacity: ${({ disabled }: ButtonProps) => (disabled ? 0.25 : 1)};
`

const Label = styled(Text)`
  align-self: center;
  font-family: ${theme.font.ui.bold};
  font-size: ${({ size }: ButtonProps) =>
    size === 'default' ? theme.font.size.default : theme.font.size.small};
  text-align: center;
  color: ${({ type }: ButtonProps) => (type === 'fill' ? 'white' : 'black')};
`

const Button: React.FC<ButtonProps> = ({
  type,
  size,
  label,
  width,
  disabled = false,
  onPress,
  style,
}) => {
  return (
    <Layout
      type={type}
      size={size}
      width={width}
      disabled={disabled}
      onPress={!disabled && onPress}
      activeOpacity={theme.button.activeOpacity}
      style={style}
    >
      <Label type={type} size={size}>
        {label}
      </Label>
    </Layout>
  )
}

export default Button
