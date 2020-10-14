import React from 'react'
import styled from 'styled-components/native'

import { animated, useTransition } from 'react-spring'
import theme from 'ui/theme'

import { Grabber } from '../Grabber'

interface BottomSheetProps {
  height?: number
  hasOverlay?: boolean
  isVisible?: boolean
  close?: () => void
  children?: React.ReactNode
  style?: any
}

const Layout = styled.SafeAreaView`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: ${({ height }: BottomSheetProps) => (height ? height : 400)};
  position: absolute;
  bottom: 0;
  z-index: ${theme.zIndex.actionSheet.content};
  border-top-right-radius: 20;
  border-top-left-radius: 20;
  background-color: white;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`

const AnimatedLayout = animated(Layout)

const Close = styled.TouchableOpacity`
  width: 40;
  padding: 10px 0px 10px 0px;
`

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`

const Overlay = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${theme.zIndex.actionSheet.overlay};
  background-color: rgba(0, 0, 0, 0.5);
`

const AnimatedOverlay = animated(Overlay)

const BottomSheet: React.FC<BottomSheetProps> = ({
  height = 400,
  hasOverlay = false,
  isVisible = false,
  close = () => {},
  children = null,
  style = {},
}) => {
  const sheetTransition = useTransition(isVisible, null, {
    from: { bottom: -height },
    enter: { bottom: 0 },
    leave: { bottom: -height },
  })

  const overlayTransition = useTransition(isVisible, null, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <>
      {sheetTransition.map(
        ({ item, key, props }: any) =>
          item && (
            <AnimatedLayout
              key={key}
              height={height}
              style={[style, props]}
              testID="sheet-container"
            >
              <Close
                activeOpacity={theme.button.activeOpacity}
                onPress={close}
                testID="close-button"
              >
                <Grabber />
              </Close>
              <Content>{children}</Content>
            </AnimatedLayout>
          )
      )}

      {hasOverlay &&
        overlayTransition.map(
          ({ item, key, props }: any) =>
            item && <AnimatedOverlay key={key} style={props} testID="overlay" />
        )}
    </>
  )
}

export default BottomSheet
