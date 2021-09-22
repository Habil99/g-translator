import React from 'react'
import { StyledNav } from './Navbar.styled'
import { StyledNavBrand } from './Navbar.styled'
import Logo from '../../assets/svgs/logo.svg'
import { StyledButton} from "../../styles";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavBrand to="/">
        <img src={Logo} alt="" />
      </StyledNavBrand>
      <StyledButton to="/translate" type="link">Let`s Start</StyledButton>
    </StyledNav>
  )
}

export default Navbar
