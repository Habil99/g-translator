import styled from 'styled-components';
import {rem} from './utils/mixins';
import { animations} from "./utils/keyframes";

const StyledDropdown = styled.div`
  position: relative;
  
  .spinner {
    animation: ${animations.loading} 1s linear infinite;
  }
  
  .Dropdown-root.is-open {
    .Dropdown-control {
      color: ${({ theme }) => theme.colors.dark.secondary};
      border-color: ${({ theme }) => theme.colors.dark.primary};
    }

    .Dropdown-menu {
      animation: ${animations.fade} 0.3s linear forwards;
    }
    
    & + span {
      transform: rotate(180deg);
    }
  }

  .Dropdown-control {
    position: relative;
    // background-color: ${({theme}) => theme.colors.dark.gray};
    background: rgba(228, 228, 228, 0.04);
    border-radius: ${rem(16)};
    display: flex;
    align-items: center;
    padding: ${rem([0, 46, 0, 21])};
    border: 2px solid transparent;
    font-weight: 600;
    height: ${rem(56)};
    color: #b0b0ba;
    transition: all .25s;
    cursor: pointer;
    letter-spacing: 0.05em;
  }
  
  .Dropdown-disabled {
    opacity: 0.5;
    user-focus: none;
    user-select: none;
    pointer-events: none;
  }

  .Dropdown-arrow-wrapper {
    position: absolute;
    right: ${rem(20)};
    width: 20px;
    height: 20px;
    background: transparent;
  }
  
  .Dropdown-menu {
    border-color: rgba(228, 228, 228, 0.1);
    background: #242731;
    box-shadow: 0 20px 16px rgba(0, 0, 0, 0.2);
    color: #fff;
    top: calc(100% + 8px);
    border-radius: ${rem(24)};
    padding: ${rem([20, 0])};
    width: calc(100% + 30px);
    opacity: 0;
    transition: all 0.3s ease-in-out;
    position: absolute;
    z-index: 5;
  }

  .Dropdown-option {
    color: #fff;
    transition: all 0.3s linear;
    padding: ${rem([8, 25])};
    cursor: pointer;
    
    &:hover {
      color: ${({ theme }) => theme.colors.dark.primary};
      background: transparent;
    }
    
    &.is-selected {
      color: ${({ theme }) => theme.colors.dark.primary};
      background: ${({ theme }) => theme.colors.dark.primaryLight};
    }
  }
  
  .Dropdown-arrow {
    display: none;
  }
`

StyledDropdown.Icon = styled.span`
  width: ${rem(20)};
  position: absolute;
  top: 15px;
  right: 20px;
  transition: all 0.3s ease-out;
  z-index: -1;
  
  svg {
    width: 100%;
  }
`

export default StyledDropdown;
