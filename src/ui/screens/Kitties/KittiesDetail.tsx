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

const KittiesDetail: React.FC<Props> = ({navigation}) => {
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
          <Text>😻 meow meow meow 😻</Text>
        </Layout>
      </ScreenContent>
    </ScreenContainer>
  );
};

export default KittiesDetail;
