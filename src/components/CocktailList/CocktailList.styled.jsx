import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
`;

export const CardContainer = styled.li`
  width: 395px;
  height: 395px;
  margin-bottom: 32px;

  @media (max-width: 1200px) {
    width: calc(50% - 32px);
  }

  @media (max-width: 767px) {
    width: calc(100% - 32px);
  }
`;
