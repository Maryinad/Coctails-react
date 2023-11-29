import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #fd5103;
  height: 110px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;

export default function Footer() {
  return <Container></Container>;
}
