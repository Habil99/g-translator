import { keyframes } from "styled-components";

export const animations = {
  fade: keyframes`
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-5px) translateX(-4px);
    }
  
    to {
      opacity: 1;
    }
  `,
  loading: keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `
}
