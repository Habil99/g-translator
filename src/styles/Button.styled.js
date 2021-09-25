import styled from "styled-components";
import { rem } from './utils/mixins';

const Button = styled.button`
  display: ${props => props.type === "link" ? `inline-block` : 'auto'};
  padding: ${rem([14, 58])};
  border-radius: ${({ theme }) => rem(theme.radius.sm)};
  background-color: ${({ theme }) => theme.colors.dark.primary};
  color: ${({ theme }) => theme.colors.dark.secondary};
  box-shadow: 0px 4px 12px 2px rgba(82, 67, 184, 0.7);
  font-weight: 500;
  font-size: ${rem(16)};
  width: max-content;
  cursor: pointer;
  border: none;
  outline: none;
  
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export default Button;
