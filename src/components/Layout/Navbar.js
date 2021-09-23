import React from 'react'
import { StyledNav } from './Navbar.styled'
import { StyledNavBrand } from './Navbar.styled'
import Logo from '../../assets/svgs/logo.svg'
import { StyledLink} from "../../styles";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavBrand to="/">
        <img src={Logo} alt="" />
      </StyledNavBrand>
      <StyledLink to="/translate" type="link">Let`s Start</StyledLink>
    </StyledNav>
  )
}

export default Navbar
