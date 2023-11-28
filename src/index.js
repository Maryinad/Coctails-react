import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from './styles';
import { Normalize } from 'styled-normalize';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Normalize />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
