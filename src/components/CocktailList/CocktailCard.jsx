import React, { useState } from 'react';

export default function CocktailCard({
  handleToggleModalOpen,
  idDrink,
  strDrinkThumb,
  strDrink,
  onAddToFavorite,
  index,
}) {
  const handleAddClicked = () => {
    onAddToFavorite(idDrink, strDrinkThumb, strDrink);
  };

  return (
    <ul>
      <li key={idDrink}>
        <img src={strDrinkThumb} alt={strDrink} width="200px" />
        <p>{strDrink}</p>
        <button type="primary" onClick={() => handleToggleModalOpen(index)}>
          Learn more
        </button>
        <button type="primary" onClick={handleAddClicked}>
          Add to 💙
        </button>
      </li>
    </ul>
  );
}
