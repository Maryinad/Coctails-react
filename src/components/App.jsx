import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import FavouritePage from 'pages/FavouritePage';
import { ErrorPage } from 'pages/ErrorPage';
import SearchResultPage from 'pages/SearchResultPage';

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};
