import React, { useState } from 'react'
import styled from 'styled-components/native'

import {
  Button,
  Header,
  HeaderTitle,
  ScreenContainer,
  ScreenContent,
  TextInput,
} from 'ui/components'

interface Props {
  navigation?: any
}

const Layout = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const FORMWIDTH = 300

const Form = styled.View`
  width: ${FORMWIDTH};
  border-radius: 10px;
  overflow: hidden;
`

const Submit = styled(Button)`
  width: ${FORMWIDTH};
  margin-top: 15;
`

const AuthLogin: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Header backgroundColor="transparent">
        <HeaderTitle title="Log In" />
      </Header>

      <ScreenContent>
        <Layout>
          <Form>
            <TextInput
              style={{ borderBottomWidth: 0.5, borderBottomColor: '#dedede' }}
              label="Username"
            />
            <TextInput label="Password" secureTextEntry />
          </Form>

          <Submit
            type="fill"
            size="default"
            label="Submit"
            onPress={() => navigation.navigate('Home')}
          />
        </Layout>
      </ScreenContent>
    </ScreenContainer>
  )
}

export default AuthLogin
