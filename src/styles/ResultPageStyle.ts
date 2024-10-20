import styled from 'styled-components';

export const ButtonWrap = styled.div<{ $isLoad: boolean }>`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  opacity: ${props => (props.$isLoad ? 1 : 0)};
  transition: 0.8s ease-in-out;
`;
