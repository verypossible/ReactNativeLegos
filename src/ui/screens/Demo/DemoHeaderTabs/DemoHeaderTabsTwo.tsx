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

const Emoji = styled(Text)`
  font-size: 80;
`

const AnimatedEmoji = posed(Emoji)({
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

const DemoHeaderTabsTwo: React.FC<Props> = ({ navigation }) => {
  const [isAnimating, setAnimating] = useState<boolean>(false)

  useEffect(() => {
    setAnimating(true) // triggers animation to start on mount
  }, [])

  return (
    <ScreenContainer>
      <ScreenContent>
        <Layout>
          <AnimatedEmoji pose={isAnimating ? 'to' : 'from'}>🐶</AnimatedEmoji>
        </Layout>
      </ScreenContent>
    </ScreenContainer>
  )
}

export default DemoHeaderTabsTwo
