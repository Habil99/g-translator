import React from 'react'
import { StyledContainer } from '../../styles'
import Navbar from './Navbar'

const index = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyledContainer>
        {children}
      </StyledContainer>
    </>
  )
}

export default index
