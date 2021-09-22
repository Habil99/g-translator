import styled from "styled-components";
import { rem } from "./utils/mixins";

const StyledContainer = styled.div`
  width: 100%;
  max-width: calc(100% - ${({theme}) => rem((theme.offset.md * 2))});
  margin: 0 auto;
`

export default StyledContainer;
