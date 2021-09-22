import styled from "styled-components";
import {rem} from "./utils/mixins";

const Image = styled.img`
  width: ${({width}) => width ? rem(width) : '100%' };
  height: ${({height}) => height ? rem(height) : 'auto' };
  object-fit: ${({ fit }) => fit ? fit : 'contain'};
`

export default Image;
