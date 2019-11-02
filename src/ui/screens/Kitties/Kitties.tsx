import React from 'react';
import styled from 'styled-components/native';

import {
  Button,
  Header,
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

const Kitties: React.FC<Props> = ({navigation}) => {
  return (
    <ScreenContainer>
      <Header>
        <HeaderTitle title="Kitties" />
      </Header>

      <ScreenContent>
        <Layout>
          <Text>🐈 Meow</Text>
          <Button
            type="border"
            size="small"
            label="pet the kitty"
            onPress={() => navigation.navigate('KittiesDetail')}
            style={{
              width: 150,
              marginTop: 20,
              opacity: 0.25,
            }}
          />
        </Layout>
      </ScreenContent>
    </ScreenContainer>
  );
};

export default Kitties;
