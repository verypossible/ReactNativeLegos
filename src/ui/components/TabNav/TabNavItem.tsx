import React from 'react'
import styled from 'styled-components/native'

import { Icon } from '../Icon'

interface TabNavItemProps {
  icon?: any
  active?: boolean
  style?: any
}

const Layout = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: ${({ active }: TabNavItemProps) => (active ? 1 : 0.85)};
`

const TabNavItem: React.FC<TabNavItemProps> = ({
  icon,
  active = false,
  style,
}) => {
  return (
    <Layout active={active} style={style}>
      <Icon width={40} height={40} fill="rgba(0,0,0,.92)" icon={icon} />
    </Layout>
  )
}

export default TabNavItem
