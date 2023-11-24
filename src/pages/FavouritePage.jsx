import React, { useState } from 'react';

export default function FavouritePage({ favoriteCocktails }) {
  console.log('favoriteCocktails', favoriteCocktails);

  const [favorites, setFavorites] = useState(favoriteCocktails);

  const handleRemoveFromFavorite = id => {
    const updateFavorites = favorites.filter(
      cocktail => cocktail.idDrink !== id
    );
    setFavorites(updateFavorites);
  };

  //как мне ее отправить в App чтоб оттуда в модальное окно?

  return (
    <div>
      <h2>Favorite Cocktails</h2>
      <ul>
        {favorites.map(cocktail => (
          <li key={cocktail.idDrink}>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              width="200px"
            />
            <p>{cocktail.strDrink}</p>
            <button>Learn more</button>
            <button
              type="primary "
              onClick={() => handleRemoveFromFavorite(cocktail.idDrink)}
            >
              Remove 💙
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
