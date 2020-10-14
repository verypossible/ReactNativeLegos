import React from 'react'
import { fireEvent, render } from 'react-native-testing-library'

import { Text } from 'ui/components'

import BottomSheet from './BottomSheet'

describe('<BottomSheet />', () => {
  it('should properly handle visibility', () => {
    const { rerender, queryByTestId } = render(
      <BottomSheet isVisible={false} />
    )

    expect(queryByTestId('sheet-container')).toEqual(null)

    rerender(<BottomSheet isVisible={true} />)

    expect(queryByTestId('sheet-container')).toBeTruthy()
  })

  it('should fire onClose event', () => {
    const onCloseMock = jest.fn()
    const { getByTestId } = render(
      <BottomSheet close={onCloseMock} isVisible />
    )

    fireEvent.press(getByTestId('close-button'))

    expect(onCloseMock).toHaveBeenCalled()
  })

  it('should be displayed with the correct height', () => {
    const { getByTestId } = render(<BottomSheet height={42} isVisible />)

    expect(getByTestId('sheet-container').props.height).toEqual(42)
  })

  it('should render overlay correctly', () => {
    const { queryByTestId, rerender } = render(
      <BottomSheet hasOverlay isVisible />
    )

    expect(queryByTestId('overlay')).toBeTruthy()

    rerender(<BottomSheet hasOverlay={false} isVisible />)

    expect(queryByTestId('overlay')).toBe(null)
  })

  it('should render children', () => {
    const { getByText } = render(
      <BottomSheet isVisible>
        <Text>Potatoe</Text>
      </BottomSheet>
    )

    expect(getByText('Potatoe')).toBeTruthy()
  })

  it('should append custom styles', () => {
    const customStyle = { tim: 'maia' }
    const { getByTestId } = render(
      <BottomSheet style={customStyle} isVisible />
    )

    const styles = getByTestId('sheet-container').props.style

    expect(styles.some((style: object) => style === customStyle)).toEqual(true)
  })
})
