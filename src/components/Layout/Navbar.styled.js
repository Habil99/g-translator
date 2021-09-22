import styled from 'styled-components'
import { rem } from '../../styles/utils/mixins'
import {Link} from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => rem([25, 60])};
  border-radius: ${rem([0, 0, 40, 40])};
  box-shadow: 0px 15px 12px 2px rgba(4, 16, 48, 0.21);
  justify-content: space-between;
`

const StyledNavBrand = styled(Link)`
  display: inline-block;
  padding: ${rem([8, 10])};
  width: ${rem(80)};

  img {
    max-width: 100%;
    object-fit: cover;
  }
`

export { StyledNav, StyledNavBrand };
