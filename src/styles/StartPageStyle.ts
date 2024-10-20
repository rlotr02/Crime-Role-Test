import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  cursor: pointer;

  > h1 {
    font: var(--H1);
    color: var(--Logo);
    position: absolute;
    z-index: 10;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
  }

  > h6 {
    font: var(--H6);
    color: var(--Border);
    position: absolute;
    bottom: 9px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`;
