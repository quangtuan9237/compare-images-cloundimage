import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 4px solid lightgray;
  border-right: 4px solid lightgray;
  border-bottom: 4px solid lightgray;
  border-left: 4px solid transparent;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
`;
