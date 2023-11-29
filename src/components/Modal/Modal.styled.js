import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 150ms ease, visibility 250ms linear;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  max-width: 650px;
  min-height: 609px;

  background-color: #fcfcfc;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: transform 250ms linear;
  padding: 40px;

  @media screen and (min-width: 1200px) {
    min-width: 528px;
    min-height: 581px;
  }

  .backdrop.is-hidden & {
    transform: translate(-50%, 70%);
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-8px, 8px);
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: #fcfcfc;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
`;

// .backdrop.is-hidden {
//   opacity: 0;
//   visibility: hidden;
//   pointer-events: none;
// }
