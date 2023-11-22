import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import FavouritePage from 'pages/FavouritePage';
import { ErrorPage } from 'pages/ErrorPage';
import SearchResultPage from 'pages/SearchResultPage';

export const App = () => {
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);

  const handleAddToFavorite = (idDrink, strDrinkThumb, strDrink) => {
    if (!favoriteCocktails.some(cocktail => cocktail.idDrink === idDrink)) {
      setFavoriteCocktails([
        ...favoriteCocktails,
        { idDrink, strDrinkThumb, strDrink },
      ]);
    }
    console.log('favoriteCocktailsF', favoriteCocktails);
  };

  return (
    <main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favourite">Favourite</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<HomePage onAddToFavorite={handleAddToFavorite} />}
        />
        <Route
          path="/favourite"
          element={<FavouritePage favoriteCocktails={favoriteCocktails} />}
        />
        <Route path="/search/:id" element={<SearchResultPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};
