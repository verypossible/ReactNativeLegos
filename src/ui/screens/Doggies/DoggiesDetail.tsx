import React, { useState } from 'react'
import styled from 'styled-components/native'

import {
  BottomSheet,
  Button,
  Header,
  HeaderAccessory,
  HeaderTitle,
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

const DoggiesDetail: React.FC<Props> = ({ navigation }) => {
  const [showActionSheet, setActionSheet] = useState<boolean>(false)

  return (
    <>
      <ScreenContainer>
        <Header>
          <HeaderAccessory
            position="left"
            icon="NavBack"
            onPress={() => navigation.goBack()}
          />
          <HeaderTitle title="You pet the doggy!" />
        </Header>

        <ScreenContent>
          <Layout>
            <Text>🐶 woof woof woof 🐶</Text>
            <Button
              size="small"
              type="border"
              label="toggle"
              onPress={() => setActionSheet(!showActionSheet)}
            />
          </Layout>
        </ScreenContent>
      </ScreenContainer>

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

export default DoggiesDetail
