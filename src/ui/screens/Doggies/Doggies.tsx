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

const Doggies: React.FC<Props> = ({navigation}) => {
  return (
    <ScreenContainer>
      <Header>
        <HeaderTitle title="Doggies" />
      </Header>

      <ScreenContent>
        <Layout>
          <Text>🐕 Woof</Text>
          <Button
            type="border"
            size="small"
            label="pet the doggy"
            onPress={() => navigation.navigate('DoggiesDetail')}
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

export default Doggies;
