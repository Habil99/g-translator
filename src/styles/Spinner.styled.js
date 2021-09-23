import styled from "styled-components";
import { Spinner9 } from '@styled-icons/icomoon/Spinner9'
import {rem} from "./utils/mixins";
import {animations} from "./utils/keyframes";

const StyledSpinner = styled(Spinner9)`
  width: ${rem(20)};
  position: absolute;
  top: 15px;
  right: 20px;
  transition: all 0.3s ease-out;
  animation: ${animations.loading} 1s linear infinite;
  
  svg {
    width: 100%;
  }
`;

export default StyledSpinner;
