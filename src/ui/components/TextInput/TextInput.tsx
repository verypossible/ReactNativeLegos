import React, { useState } from 'react'
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components/native'

import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native'
import { Text } from '../Typography'

interface TextInputProps extends NativeTextInputProps {
  label?: string
  error?: boolean
  disabled?: boolean
  ref?: any
  style?: any
}

const INPUTHEIGHT = 60

const Layout = styled.View`
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: ${INPUTHEIGHT};
  position: relative;
  background: white;
  overflow: hidden;
`

const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0px 10px;
`

const Label = styled(Text)`
  position: absolute;
  z-index: 2;
  font-size: 15;
  line-height: 15;
`

const Input = styled(NativeTextInput)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding-top: 25;
  font-size: 15;
  line-height: 15;
`

const TextInput: React.FC<TextInputProps> = ({
  label,
  error = false,
  style,
  ref,
  ...textInputProps
}) => {
  const [inputValue, onChangeText] = useState<string>('')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const isChanged = isFocused || inputValue.length >= 1

  return (
    <Layout style={style}>
      <InnerContainer>
        <Spring
          to={{
            top: isChanged ? 10 : 23,
            fontSize: isChanged ? 10 : 15,
          }}
        >
          {(props: any) => <Label style={props}>{label}</Label>}
        </Spring>

        <Input
          {...textInputProps}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={(text: any) => onChangeText(text)}
          ref={ref}
        />
      </InnerContainer>
    </Layout>
  )
}

export default TextInput
