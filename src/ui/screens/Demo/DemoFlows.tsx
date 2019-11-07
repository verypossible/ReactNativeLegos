import React from 'react'
import styled from 'styled-components/native'

import {
  Button,
  Header,
  HeaderTitle,
  ScreenContainer,
  ScreenContent,
} from 'ui/components'

interface Props {
  navigation: any
}

const Layout = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const DemoFlows: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Header backgroundColor="transparent">
        <HeaderTitle title="Flows" />
      </Header>

      <ScreenContent>
        <Layout>
          <Button
            type="border"
            size="small"
            label="Log In"
            onPress={() => navigation.navigate('Auth')}
            style={{
              width: 150,
              opacity: 0.25,
            }}
          />
        </Layout>
      </ScreenContent>
    </ScreenContainer>
  )
}

export default DemoFlows
