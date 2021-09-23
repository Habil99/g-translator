import styled from "styled-components";
import {rem} from "./utils/mixins";

const StyledTextArea = styled.textarea`
  position: relative;
  border: none;
  outline: none;
  border-radius: ${rem(12)};
  min-height: ${rem(220)};
  resize: none;
  padding: ${rem([15, 30])};
  width: 100%;
  color: ${({ theme }) => theme.colors.dark.secondary};
  background: ${( { theme }) => theme.colors.dark.main};
`

export default StyledTextArea;
