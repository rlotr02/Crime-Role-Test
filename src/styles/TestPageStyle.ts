import styled from 'styled-components';

export const Container = styled.div`
  > h2 {
    font: var(--H2);
    color: var(--Sub);
  }

  > h3 {
    font: var(--H3);
    color: var(--Header);
    white-space: pre-wrap;
    margin-top: 9px;
    margin-bottom: 25px;
  }
`;

export const AnswerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
