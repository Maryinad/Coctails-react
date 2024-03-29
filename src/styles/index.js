import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  



*, *: : before, *: : after {
  box-sizing: border-box;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

button {
  cursor: pointer;
  font-family: inherit;
}

address {
  font-style: normal;
}

a {
  text-decoration: none;
}

img {
  display: block;
}

.list {
  list-style: none;
}

.link {
  text-decoration: none;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

body {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: #fd5103;
  background-color: #FCFCFC;
  fill: #FCFCFC;
  transition: background-color 0.5s ease, color 0.5s ease, fill 0.5s ease;
}
`;
