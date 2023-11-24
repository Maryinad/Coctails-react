import React from 'react';
import CocktailCard from './CocktailCard';

export default function CocktailList({
  handleToggleModalOpen,
  randomCocktailsData,
  onAddToFavorite,
  selectedCoc,
}) {
  console.log('randomCocktailsData', randomCocktailsData);
  return (
    <div>
      {randomCocktailsData.map((cocktail, index) => (
        <CocktailCard
          key={cocktail.idDrink}
          {...cocktail}
          onAddToFavorite={onAddToFavorite}
          handleToggleModalOpen={handleToggleModalOpen}
          index={index}
        />
      ))}
    </div>
  );
}
