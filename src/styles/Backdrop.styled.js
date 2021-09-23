import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 43px;
    left: 32px;
    right: 32px;
    bottom: -43px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.51;
    -webkit-filter: blur(86.985px);
    filter: blur(86.985px);
    border-radius: 24px;
  }
`;

export default StyledBackdrop;
