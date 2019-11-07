import React from 'react'

import {
  Header,
  HeaderTitle,
  List,
  ListItem,
  ScreenContainer,
  ScreenContent,
} from 'ui/components'

interface Props {
  navigation: any
}

const DemoFlows: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Header backgroundColor="white">
        <HeaderTitle title="Flows" />
      </Header>

      <ScreenContent>
        <List>
          <ListItem
            label="Log In"
            onPress={() => navigation.navigate('Auth')}
          />
        </List>
      </ScreenContent>
    </ScreenContainer>
  )
}

export default DemoFlows
