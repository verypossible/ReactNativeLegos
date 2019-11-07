import React, { useState } from 'react'
import styled from 'styled-components/native'

import {
  BottomSheet,
  Button,
  Header,
  HeaderTitle,
  Modal,
  Notification,
  ScreenContainer,
  ScreenContent,
  Text,
} from 'ui/components'

interface Props {
  navigation: any
}

const Layout = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const DemoButton = styled(Button)`
  width: 150;
  margin-top: 15;
`

const DemoComponents: React.FC<Props> = ({ navigation }) => {
  const [showNotification, setNotification] = useState<boolean>(false)
  const [showActionSheet, setActionSheet] = useState<boolean>(false)
  const [showModal, setModal] = useState<boolean>(false)

  return (
    <>
      <ScreenContainer>
        <Header backgroundColor="transparent">
          <HeaderTitle title="Components" />
        </Header>

        <ScreenContent>
          <Layout>
            <DemoButton
              type="border"
              size="small"
              label="Header w/ Tabs"
              onPress={() => navigation.navigate('DemoHeaderTabs')}
            />
            <DemoButton
              type="border"
              size="small"
              label="Notification"
              onPress={() => setNotification(!showNotification)}
            />
            <DemoButton
              type="border"
              size="small"
              label="BottomSheet"
              onPress={() => setActionSheet(!showActionSheet)}
            />
            <DemoButton
              type="border"
              size="small"
              label="Modal"
              onPress={() => setModal(!showModal)}
            />
          </Layout>
        </ScreenContent>
      </ScreenContainer>

      <Notification
        isVisible={showNotification}
        close={() => setNotification(!showNotification)}
      >
        <Text>Notification</Text>
      </Notification>

      <Modal isVisible={showModal} closeModal={() => setModal(!showModal)}>
        <Text>Modal</Text>
      </Modal>

      <BottomSheet
        height={400}
        hasOverlay={true}
        isVisible={showActionSheet}
        close={() => setActionSheet(!showActionSheet)}
      >
        <Text>BottomSheet</Text>
      </BottomSheet>
    </>
  )
}

export default DemoComponents
