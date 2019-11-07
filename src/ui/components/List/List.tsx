import React from 'react'
import styled from 'styled-components/native'

interface ListProps {
  children?: React.ReactNode
  style?: any
}

const Layout = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: white;
  border-top-width: 1;
  border-top-color: #dedede;
`

const List: React.FC<ListProps> = ({ children, style }) => {
  return (
    <Layout showsVerticalScrollIndicator={false} style={style}>
      {children}
    </Layout>
  )
}

export default List
