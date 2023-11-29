import styled from 'styled-components';

export const CardContainer = styled.li`
  border: 1px solid #fd5103;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  width: 280px;

  @media screen and (min-width: 767px) {
    flex-basis: calc((100% - 32px) / 2);
    width: 335px;
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 64px) / 3);
    /* width: 395px; */
  }
`;

export const CardImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Title = styled.p`
  color: #202025;
  text-align: center;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 900;
  line-height: 1.61;
  margin-top: 48px;
  margin-bottom: 16px;

  @media screen and (min-width: 767px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 24px;
`;

export const ButtonMain = styled.button`
  padding: 7px 16px;

  border-radius: 4px;
  background: #fe7031;
  border: #fe7031;

  @media screen and (min-width: 767px) {
    /* padding: 12px 27px; */
  }
  @media screen and (min-width: 1200px) {
    /* padding: 12px 38px; */
  }
`;

export const ButtonBase = styled(ButtonMain)`
  background: #fff;
  border: 1px solid #fd5103;
  &:active {
    background: #fd5103;
    color: #fff;
  }
`;

export const BtnMainText = styled.button`
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  border: none;
  background-color: inherit;

  @media screen and (min-width: 767px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const BtnBaseText = styled(BtnMainText)`
  color: #fe7031;
`;
