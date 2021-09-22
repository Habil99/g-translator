import styled from "styled-components";
import {rem} from "./utils/mixins";

const Margin = styled.div`
  margin: ${({ margin }) => rem(margin)};
`
export default Margin;
