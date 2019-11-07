import React from 'react'
import { ScreenContainer, ScreenContent, Text } from 'ui/components'

interface Props {
  navigation: any
}

const TabOne: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ScreenContent>
        <Text>Tab One</Text>
      </ScreenContent>
    </ScreenContainer>
  )
}

export default TabOne
