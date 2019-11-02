import React from 'react';
import styled from 'styled-components/native';

interface TabNavItemProps {
  label?: string;
  active?: boolean;
  fontStyle?: any;
  style?: any;
}

const Layout = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Label = styled.Text`
  color: black;
  opacity: ${({active}: TabNavItemProps) => (active ? 1 : 0.5)};
`;

const TabNavItem: React.FC<TabNavItemProps> = ({
  label,
  active = false,
  fontStyle,
  style,
}) => {
  return (
    <Layout style={style}>
      <Label active={active} style={fontStyle}>
        {label}
      </Label>
    </Layout>
  );
};

export default TabNavItem;
