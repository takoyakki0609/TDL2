import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <h4>react</h4>
      <h4>redux</h4>
    </Container>
  )
}

export default Header

const Container = styled.section`
    display: flex;
    background-color: beige;
`