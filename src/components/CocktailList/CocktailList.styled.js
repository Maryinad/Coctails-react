import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 170px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    gap: 25px;
  }
`;
