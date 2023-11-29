import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 61px;
  padding-bottom: 40px;
  flex-direction: column;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  font-family: Poppins;
  color: #fd5103;
  font-size: 22px;
  max-width: 360px;
  height: auto;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  line-height: 1.58;
  white-space: normal;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    max-width: 336px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 52px;
    max-width: 668px;
  }
`;

export const Text = styled.p`
  display: block;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    color: #202025;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const DefaultListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Alphabet = styled(DefaultListWrapper)`
  width: 520px;

  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 767px) {
    color: #5f6775;
    width: 276px;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 12px;
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    width: 520px;
  }
`;

export const DefaultElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    color: #fd5103;
    cursor: grab;
  }

  @media screen and (min-width: 767px) {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 40px;
    height: 40px;
  }
`;

export const Numbers = styled(DefaultListWrapper)`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 767px) {
    color: #5f6775;
    width: 276px;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 10px;
  }

  @media screen and (min-width: 1280px) {
    width: 520px;
    margin-left: 40px;
  }
`;

export const Image = styled.img`
  width: 307px;
  height: 274px;

  @media screen and (min-width: 768px) {
    width: 368px;
    height: 329px;
  }

  @media screen and (min-width: 1280px) {
    width: 549px;
    height: 490px;
  }
`;
