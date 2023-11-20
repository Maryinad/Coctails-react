import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from '../pages/HomePage';
import FavouritePage from 'pages/FavouritePage';
import { ErrorPage } from 'pages/ErrorPage';
import SearchResultPage from 'pages/SearchResultPage';

export const App = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favourite">Favourite</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/search/:id" element={<SearchResultPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};
