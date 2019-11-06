import React, { Component, useState } from 'react'
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components/native'

import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native'
import { Text } from '../Typography'

interface TextInputProps extends NativeTextInputProps {
  label?: string
  value?: string
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
`

const Label = styled(Text)`
  position: relative;
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
  const [value, onChangeText] = useState<string>('')
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <Layout style={style}>
      <Spring
        to={{ color: isFocused || value.length >= 1 ? 'yellow' : 'black' }}
      >
        {(props: any) => <Label style={props}>{label}</Label>}
      </Spring>

      <Input
        {...textInputProps}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={(text: any) => onChangeText(text)}
        value={value}
        ref={ref}
      />
    </Layout>
  )
}

// class TextInput extends Component<TextInputProps, TextInputState> {
//   state = {
//     isFocused: false,
//   }

//   onFocus = () => {
//     this.setState({ isFocused: true })
//   }

//   onBlur = () => {
//     this.setState({ isFocused: false })
//   }

//   render() {
//     const { label, error = false, style, ref, ...textInputProps } = this.props
//     const { isFocused } = this.state

//     return (
//       <Layout style={style}>
//         <Spring to={{ color: isFocused ? 'yellow' : 'black' }}>
//           {(props: any) => <Label style={props}>{label}</Label>}
//         </Spring>

//         <Input
//           {...textInputProps}
//           onFocus={this.onFocus}
//           onBlur={this.onBlur}
//           ref={ref}
//         />
//       </Layout>
//     )
//   }
// }

export default TextInput
