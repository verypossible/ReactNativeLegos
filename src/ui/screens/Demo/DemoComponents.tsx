import React, { useState } from 'react'

import {
  BottomSheet,
  Header,
  HeaderTitle,
  List,
  ListItem,
  Modal,
  Notification,
  ScreenContainer,
  ScreenContent,
  Text,
} from 'ui/components'

interface Props {
  navigation: any
}

const DemoComponents: React.FC<Props> = ({ navigation }) => {
  const [showNotification, setNotification] = useState<boolean>(false)
  const [showBottomSheet, setBottomSheet] = useState<boolean>(false)
  const [showModal, setModal] = useState<boolean>(false)

  return (
    <>
      <ScreenContainer>
        <Header backgroundColor="white">
          <HeaderTitle title="Components" />
        </Header>

        <ScreenContent>
          <List>
            <ListItem
              label="Bottom Sheet"
              onPress={() => setBottomSheet(!showBottomSheet)}
            />
            <ListItem
              label="Header w/ Tabs"
              onPress={() => navigation.navigate('DemoHeaderTabs')}
            />
            <ListItem label="Modal" onPress={() => setModal(!showModal)} />
            <ListItem
              label="Notification"
              onPress={() => setNotification(!showNotification)}
            />
          </List>
        </ScreenContent>
      </ScreenContainer>

      <Notification
        backgroundColor="red"
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
        isVisible={showBottomSheet}
        close={() => setBottomSheet(!showBottomSheet)}
      >
        <Text>BottomSheet</Text>
      </BottomSheet>
    </>
  )
}

export default DemoComponents
