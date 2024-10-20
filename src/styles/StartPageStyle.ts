import styled, { keyframes } from 'styled-components';

export const Container = styled.div<{ $isLoad: boolean }>`
  position: relative;
  cursor: pointer;

  > h6 {
    font: var(--H6);
    color: var(--Border);
    position: absolute;
    bottom: 9px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    opacity: ${props => (props.$isLoad ? 1 : 0)};
    transition: 0.8s ease-in-out;
  }
`;

const colorChange = keyframes`
  0%, 100% { color: var(--Logo); }
  25% { color: #853827; }
  50% { color: #B2472F; }
  75% { color: #853827; }
`;

export const StartText = styled.h1<{ $isLoad: boolean }>`
  font: var(--H1);
  position: absolute;
  z-index: 10;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${colorChange} 5s infinite;
  opacity: ${props => (props.$isLoad ? 1 : 0)};
  transition: 0.8s ease-in-out;
`;
