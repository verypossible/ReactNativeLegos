import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'ui/components';

import {
  Header,
  HeaderTitle,
  SegmentedControl,
  ScreenContainer,
  ScreenContent
} from 'ui/components';

interface Props {
  navigation: any;
}

const Layout = styled.View`
  flex: 1;
  align-items: center;
  position: relative;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const View = styled.View`
  width: 95%;
  margin: 20px 16px;
`;

const Back = styled(Button)`
  width: 100;
  position: absolute;
  bottom: 0;
  opacity: 0.25;
`;

const DemoControls: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Header backgroundColor='white'>
        <HeaderTitle title='Controls' />
      </Header>

      <ScreenContent>
        <Layout>
          <View style={{ marginBottom: 10 }}>
            <Text>Segmented Controls</Text>
            <SegmentedControl values={['First', 'Second', 'Third']} />
          </View>
          <Back
            size='small'
            type='border'
            label='Back'
            onPress={() => navigation.pop()}
          />
        </Layout>
      </ScreenContent>
    </ScreenContainer>
  );
};

export default DemoControls;
