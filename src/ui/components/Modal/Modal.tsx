import React from 'react'
import styled from 'styled-components/native'

import { Modal as RNModal } from 'react-native'
import theme from 'ui/theme'

import { Text } from '../Typography'

interface ModalProps {
  isVisible?: boolean
  animationType?: 'fade' | 'none' | 'slide'
  onDismiss?: () => void
  closeModal?: () => void
  children?: React.ReactNode
}

const Overlay = styled.View`
  flex-flow: column nowrap;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: ${theme.zIndex.modal};
  background-color: rgba(0, 0, 0, 0.5);
`

const Layout = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 300;
  height: 300;
  position: relative;
  border-radius: 20;
  background-color: white;
`

const Close = styled.TouchableOpacity`
  margin-top: 20;
`

const CloseText = styled(Text)`
  color: white;
`

const Modal: React.FC<ModalProps> = ({
  isVisible = false,
  animationType = 'slide',
  onDismiss,
  closeModal,
  children,
}) => {
  return (
    <RNModal
      visible={isVisible}
      animationType={animationType}
      onDismiss={onDismiss}
      transparent={true}
    >
      <Overlay>
        <Layout>{children}</Layout>
        <Close activeOpacity={theme.button.activeOpacity} onPress={closeModal}>
          <CloseText>Close</CloseText>
        </Close>
      </Overlay>
    </RNModal>
  )
}

export default Modal
