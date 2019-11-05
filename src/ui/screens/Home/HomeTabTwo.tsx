import React from 'react'
import styled from 'styled-components/native'

import { Button, ScreenContainer, ScreenContent, Text } from 'ui/components'

interface Props {
  navigation: any
}

const Layout = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const NotHome: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ScreenContent>
        <Layout>
          <Text>🐈 Meow</Text>
          <Button
            type="border"
            size="small"
            label="pet the kitty"
            onPress={() => navigation.navigate('HomeDetail')}
            style={{
              width: 150,
              marginTop: 20,
              opacity: 0.25,
            }}
          />
        </Layout>
      </ScreenContent>
    </ScreenContainer>
  )
}

export default NotHome
