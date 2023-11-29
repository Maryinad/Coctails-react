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

export const Title = styled.h2`
  color: #202025;
  text-align: center;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 700;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    margin-bottom: 80px;
  }
`;
