import React from 'react';
import styled from 'styled-components/native';
import theme from 'ui/theme';

interface AvatarProps {
  image?: any;
  style?: any;
  imageStyle?: any;
}

const Layout = styled.ImageBackground`
  width: 140px;
  height: 140px;
  box-shadow: ${theme.shadow.bottom};
`;

const Avatar: React.FC<AvatarProps> = ({ image, imageStyle, style }) => {
  return <Layout source={image} imageStyle={imageStyle} style={style} />;
};

export default Avatar;
