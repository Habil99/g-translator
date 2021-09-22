import styled from "styled-components";
import { rem } from "./utils/mixins";

const Typography = {
  Title: styled.p`
    font-size: ${({ size }) => rem(size)};
    color: ${({ theme }) => theme.colors.dark.secondary};
    font-weight: ${({ weight }) => rem(weight)};
    margin-bottom: ${rem(16)};
  `,
  Text: styled.p`
    font-size: ${({ size }) => rem(size)};
    color: ${({ theme }) => theme.colors.dark.secondary};
    font-weight: ${({ weight }) => rem(weight)};
    margin-bottom: ${rem(32)};
  `
}

export default Typography;
