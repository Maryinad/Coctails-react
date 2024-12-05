import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import FavouritePage from 'pages/FavouritePage/FavouritePage';
import { ErrorPage } from 'pages/ErrorPage';

import SearchResultPage from 'pages/SearchResultPage';
import { ThemeProvider } from 'styled-components';
import { startTransition } from 'react';
import { theme } from 'styles/theme';

export const App = () => {
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);
  const [searchedCocktails, setSearchedCocktails] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCoc, setSelectedCoc] = useState({});
  const [cocktails, setCocktails] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('light');

  const handleToggleModalOpen = index => {
    const selectedCocktail = cocktails[index];

    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = selectedCocktail[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }

    setSelectedCoc({
      id: selectedCocktail.idDrink,
      strDrinkThumb: selectedCocktail.strDrinkThumb,
      strDrink: selectedCocktail.strDrink,
      strInstructions: selectedCocktail.strInstructions,
      strIngredient: ingredients,
    });

    setIsOpenModal(true);
  };

  const onClose = () => {
    setIsOpenModal(false);
  };

  const handleAddToFavorite = (idDrink, strDrinkThumb, strDrink) => {
    if (!favoriteCocktails.some(cocktail => cocktail.idDrink === idDrink)) {
      setFavoriteCocktails([
        ...favoriteCocktails,
        { idDrink, strDrinkThumb, strDrink },
      ]);
    }
    console.log('favoriteCocktailsF', favoriteCocktails);
  };

  const toggleTheme = () =>
    setSelectedTheme(currentTheme =>
      currentTheme === 'light' ? 'dark' : 'light'
    );

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setSearchedCocktails={setSearchedCocktails}
                onAddToFavorite={handleAddToFavorite}
                searchedCocktails={searchedCocktails}
                handleToggleModalOpen={handleToggleModalOpen}
                onClose={onClose}
                selectedCoc={selectedCoc}
                cocktails={cocktails}
                isOpenModal={isOpenModal}
                setCocktails={setCocktails}
              />
            }
          />
          <Route
            path="/favourite"
            element={
              <FavouritePage
                setSearchedCocktails={setSearchedCocktails}
                favoriteCocktails={favoriteCocktails}
                handleToggleModalOpen={handleToggleModalOpen}
                onClose={onClose}
                selectedCoc={selectedCoc}
                cocktails={cocktails}
                isOpenModal={isOpenModal}
                setCocktails={setCocktails}
              />
            }
          />
          <Route path="/search/:id" element={<SearchResultPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
};
