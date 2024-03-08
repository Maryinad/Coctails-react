import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.background};
  height: 110px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;

export default function Footer() {
  return <Container></Container>;
}
