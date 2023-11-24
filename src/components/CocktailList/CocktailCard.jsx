import React from 'react';

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
        <img src={strDrinkThumb} alt={strDrink} width="365px" />
        <p>{strDrink}</p>
        <button type="button" onClick={() => handleToggleModalOpen(index)}>
          Learn more
        </button>
        <button type="button" onClick={handleAddClicked}>
          Add to 💙
        </button>
      </li>
    </ul>
  );
}
