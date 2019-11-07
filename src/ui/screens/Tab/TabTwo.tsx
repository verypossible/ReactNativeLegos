import React from 'react'
import { ScreenContainer, ScreenContent, Text } from 'ui/components'

interface Props {
  navigation: any
}

const TabTwo: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ScreenContent>
        <Text>Tab Two</Text>
      </ScreenContent>
    </ScreenContainer>
  )
}

export default TabTwo
