import React from 'react';
import CocktailCard from './CocktailCard';

export default function CocktailList({ randomCocktailsData, onAddToFavorite }) {
  console.log('randomCocktailsData', randomCocktailsData);
  return (
    <div>
      {randomCocktailsData.map(cocktail => (
        <CocktailCard
          key={cocktail.idDrink}
          {...cocktail}
          onAddToFavorite={onAddToFavorite}
        />
      ))}
    </div>
  );
}
