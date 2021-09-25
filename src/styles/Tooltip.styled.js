import styled from "styled-components";
import {rem} from "./utils/mixins";

const StyledTooltip = styled.div`
  position: absolute;
  top: ${rem(-35)};
  left: calc(50% + ${rem(60)});
  transform: translateX(-50%);
  width: ${rem(180)};
  background: #1c243cab;
  color: #fff;
  font-size: ${rem(14)};
  font-weight: 400;
  text-align: center;
  opacity: 0;
  visibility: hidden; 
  transition: all 0.3s ease-out;
  
  &.show {
    opacity: 1;
    visibility: visible;
  }
`

StyledTooltip.Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${rem([8, 10])};

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #1c243cab transparent transparent transparent;
  }
`

export default StyledTooltip;
