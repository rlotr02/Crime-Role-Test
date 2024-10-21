import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;

  > h2 {
    font: var(--H2);
    color: var(--Sub);
  }

  > h3 {
    font: var(--H3);
    color: var(--Header);
    white-space: pre-wrap;
    margin-top: 9px;
    height: 85px;
  }
`;

export const AnswerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
