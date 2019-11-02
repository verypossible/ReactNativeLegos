import React from 'react';
import styled from 'styled-components/native';

import {
  Header,
  HeaderAccessory,
  HeaderTitle,
  ScreenContainer,
  ScreenContent,
  Text,
} from 'ui/components';

interface Props {
  navigation: any;
}

const Layout = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const DoggiesDetail: React.FC<Props> = ({navigation}) => {
  return (
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
        </Layout>
      </ScreenContent>
    </ScreenContainer>
  );
};

export default DoggiesDetail;
