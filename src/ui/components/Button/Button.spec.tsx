import React from 'react'
import { fireEvent, render } from 'react-native-testing-library'

import Button from './Button'

describe('<Button />', () => {
  it('should render label', () => {
    const { getByText } = render(<Button label="potatoe" type="border" />)

    expect(getByText('potatoe')).toBeTruthy()
  })
  it('should fire press event', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(
      <Button label="potatoe" type="border" onPress={onPressMock} />
    )

    fireEvent.press(getByText('potatoe'))

    expect(onPressMock).toHaveBeenCalled()
  })

  it('should not fire press event when disabled', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(
      <Button label="potatoe" type="border" onPress={onPressMock} disabled />
    )

    fireEvent.press(getByText('potatoe'))

    expect(onPressMock).not.toHaveBeenCalled()
  })

  it('should render button with fixed width', () => {
    const { getByTestId } = render(
      <Button label="potatoe" type="border" width={42} />
    )

    expect(getByTestId('button').props.style.width).toBe(42)
  })

  it('should append custom styles to button', () => {
    const customStyle = { color: 'papayawhip' }
    const { getByTestId } = render(
      <Button label="potatoe" type="border" style={customStyle} />
    )

    expect(getByTestId('button').props.style).toMatchObject(customStyle)
  })
})
