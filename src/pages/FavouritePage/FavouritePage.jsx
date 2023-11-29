import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { ContainerF } from './FavouritePage.styled';

export default function FavouritePage({
  favoriteCocktails,
  handleToggleModalOpen,
  onClose,
  selectedCoc,
  cocktails,
  isOpenModal,
  setCocktails,
  setSearchedCocktails,
}) {
  console.log('favoriteCocktails', favoriteCocktails);

  const [favorites, setFavorites] = useState(favoriteCocktails);

  const handleRemoveFromFavorite = id => {
    const updateFavorites = favorites.filter(
      cocktail => cocktail.idDrink !== id
    );
    setFavorites(updateFavorites);
  };

  return (
    <>
      <Header setSearchedCocktails={setSearchedCocktails} />
      <ContainerF>
        <h2>Favorite Cocktails</h2>
        <ul>
          {favorites.map((cocktail, index) => (
            <li key={cocktail.idDrink}>
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                width="200px"
              />
              <p>{cocktail.strDrink}</p>
              <button
                type="button"
                onClick={() => handleToggleModalOpen(cocktail.idDrink)}
              >
                Learn more
              </button>
              <button
                type="primary "
                onClick={() => handleRemoveFromFavorite(cocktail.idDrink)}
              >
                Remove 💙
              </button>
            </li>
          ))}
        </ul>
      </ContainerF>
      <Footer />
      {isOpenModal && (
        <Modal
          onClose={onClose}
          data={selectedCoc}
          handleRemoveFromFavorite={handleRemoveFromFavorite}
        />
      )}
    </>
  );
}
