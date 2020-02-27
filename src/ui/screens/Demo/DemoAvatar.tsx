import React from 'react';
import styled from 'styled-components/native';
import AvatarImage from 'src/ui/data/user/avatar.png';
import theme from 'ui/theme';
import { Button } from 'ui/components';

import {
  Avatar,
  Header,
  HeaderTitle,
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

const AvatarWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Back = styled(Button)`
  width: 100;
  position: absolute;
  bottom: 0;
  opacity: 0.25;
`;

const DemoAvatar: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Header backgroundColor='white'>
        <HeaderTitle title='Avatar' />
      </Header>

      <ScreenContent>
        <Layout>
          <AvatarWrap>
            <Avatar
              image={AvatarImage}
              imageStyle={{ borderRadius: theme.radius.xlarge }}
            />
          </AvatarWrap>
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

export default DemoAvatar;
