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

const Text = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const View = styled.View`
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
        <View style={{ marginBottom: 10 }}>
          <Text>Segmented Controls</Text>
          <SegmentedControl
            values={['Option 1', 'Option 2', 'Option 3']}
            selectedIndex={0}
            tintColor='#155AEE'
            backgroundColor='#FFFFFF'
          />
        </View>
        <Back
          size='small'
          type='border'
          label='Back'
          onPress={() => navigation.pop()}
        />
      </ScreenContent>
    </ScreenContainer>
  );
};

export default DemoControls;
