import React from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components/native'

import theme from 'ui/theme'

interface NotificationProps {
  isVisible?: boolean
  close?: () => void
  height?: number
  backgroundColor?: any
  children?: React.ReactNode
  style?: any
}

const GUTTER = 40

const Layout = styled.SafeAreaView`
  width: ${theme.screen.width - GUTTER};
  height: auto;
  position: absolute;
  top: 0;
  z-index: ${theme.zIndex.notification};
  margin: 0 ${GUTTER / 2}px;
`

const InnerContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ height }: NotificationProps) => (height ? height : 100)};
  position: relative;
  border-radius: 10;
  background-color: ${({ backgroundColor }: NotificationProps) =>
    backgroundColor ? backgroundColor : 'white'};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`

const AnimatedLayout = animated(Layout)

const Notification: React.FC<NotificationProps> = ({
  isVisible = false,
  close,
  height = 100,
  backgroundColor = 'white',
  children,
  style,
}) => {
  const showAnimation = useTransition(isVisible, null, {
    from: { opacity: 0, top: -height },
    enter: { opacity: 1, top: 0 },
    leave: { opacity: 0, top: -height },
  })

  return (
    <>
      {showAnimation.map(
        ({ item, key, props }: any) =>
          item && (
            <AnimatedLayout key={key} style={props}>
              <InnerContainer
                height={height}
                backgroundColor={backgroundColor}
                style={style}
                onPress={close}
                activeOpacity={theme.button.activeOpacity}
              >
                {children}
              </InnerContainer>
            </AnimatedLayout>
          )
      )}
    </>
  )
}

export default Notification
