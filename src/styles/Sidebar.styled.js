import styled from "styled-components";
import {rem} from "./utils/mixins";

const StyledSidebar = styled.div`
  background: ${({theme}) => theme.colors.dark.main};
  padding: ${rem([24])};
  border-radius: ${rem(24)};
  display: flex;
  flex-direction: column;
`

StyledSidebar.Button = styled.button`
  position: relative;
  width: 100%;
  padding: ${rem([10, 25])};
  font-size: ${rem(16)};
  font-weight: 600;
  background: transparent;
  color: ${({theme}) => theme.colors.dark.secondary};
  border-radius: ${({theme}) => rem(theme.radius.sm)};
  transition: all 0.3s ease-out;
  border: none;
  outline: none;
  min-height: ${rem(56)};
  text-align: left;
  cursor: pointer;
  text-transform: capitalize;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;

  svg {
    width: 18px;
  }

  span {
    margin-left: ${rem(10)};
  }

  &:hover:not(&.active) {
    color: #8E9AFFF0;
  }

  &.active {
    background: ${({theme}) => theme.colors.dark.mainLight};
  }
`

export default StyledSidebar;
