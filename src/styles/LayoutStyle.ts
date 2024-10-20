import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13px;
  position: relative;
  height: 100dvh;
`;

export const AdfitWrap = styled.div`
  position: absolute;

  @media (max-width: 678px) {
    display: none;
  }
`;

export const AdfitBottomWrap = styled.div`
  width: 320px;
  height: 100px;
`;
