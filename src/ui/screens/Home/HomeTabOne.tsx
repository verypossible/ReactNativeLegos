import React, { useState } from 'react'
import styled from 'styled-components/native'

import {
  BottomSheet,
  Button,
  Modal,
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

const Home: React.FC<Props> = ({ navigation }) => {
  const [showActionSheet, setActionSheet] = useState<boolean>(false)
  const [showModal, setModal] = useState<boolean>(false)

  return (
    <>
      <ScreenContainer>
        <ScreenContent>
          <Layout>
            <Button
              type="border"
              size="small"
              label="BottomSheet"
              onPress={() => setActionSheet(!showActionSheet)}
              style={{
                width: 150,
                opacity: 0.25,
              }}
            />
            <Button
              type="border"
              size="small"
              label="Modal"
              onPress={() => setModal(!showModal)}
              style={{
                width: 150,
                marginTop: 20,
                opacity: 0.25,
              }}
            />
          </Layout>
        </ScreenContent>
      </ScreenContainer>

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

export default Home
