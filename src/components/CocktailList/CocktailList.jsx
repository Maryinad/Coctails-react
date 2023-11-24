import React from 'react';
import CocktailCard from './CocktailCard';
import { Container } from './CocktailList.styled';

export default function CocktailList({
  handleToggleModalOpen,
  randomCocktailsData,
  onAddToFavorite,
  selectedCoc,
}) {
  console.log('randomCocktailsData', randomCocktailsData);
  return (
    <Container>
      {randomCocktailsData.map((cocktail, index) => (
        <CocktailCard
          key={cocktail.idDrink}
          {...cocktail}
          onAddToFavorite={onAddToFavorite}
          handleToggleModalOpen={handleToggleModalOpen}
          index={index}
        />
      ))}
    </Container>
  );
}
