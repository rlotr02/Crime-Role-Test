import styled from 'styled-components';

export const StartWrap = styled.div`
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

  > img {
    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
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
