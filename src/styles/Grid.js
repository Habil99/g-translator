import styled from "styled-components";
import { rem } from "./utils/mixins";

const Grid = {
  Row: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: ${({ align }) => align};
  `,
  Col: styled.div`
    padding: ${({ theme }) => rem(theme.gap.sm)};
    width: 100%;
    display: ${({ display }) => display};
    justify-content: ${({ justify }) => justify};
    flex-direction: column;

    @media screen and (min-width: ${({ theme }) => rem(theme.screen.lg)}) {
      width: calc(${props => (props.lg / 24 * 100) + "%"});
    }
  `
}

export default Grid
