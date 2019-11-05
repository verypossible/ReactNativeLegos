import React, { useEffect, useState } from 'react'
import posed from 'react-native-pose'
import styled from 'styled-components/native'

import * as easings from 'd3-ease'

import {
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

const Kitty = styled(Text)`
  font-size: 80;
`

const AnimatedKitty = posed(Kitty)({
  from: { rotate: '0deg' },
  to: {
    rotate: '360deg',
    transition: ({ toValue }: any) => ({
      rotate: {
        type: 'keyframes',
        duration: 3000,
        easings: easings.easeLinear,
        values: [0, toValue],
        loop: Infinity,
      },
    }),
  },
})

const PetTheKitty: React.FC<Props> = ({ navigation }) => {
  const [isAnimating, setAnimating] = useState<boolean>(false)

  useEffect(() => {
    setAnimating(true) // triggers animation to start on mount
  }, [])

  return (
    <ScreenContainer>
      <Header>
        <HeaderAccessory
          position="left"
          icon="NavBack"
          onPress={() => navigation.goBack()}
        />
        <HeaderTitle title="You pet the kitty!" />
      </Header>

      <ScreenContent>
        <Layout>
          <AnimatedKitty pose={isAnimating ? 'to' : 'from'}>😻</AnimatedKitty>
        </Layout>
      </ScreenContent>
    </ScreenContainer>
  )
}

export default PetTheKitty
