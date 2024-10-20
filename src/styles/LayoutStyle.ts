import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  position: relative;
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
