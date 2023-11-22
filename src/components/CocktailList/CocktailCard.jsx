import React, { useState } from 'react';

export default function CocktailCard({
  idDrink,
  strDrinkThumb,
  strDrink,
  onAddToFavorite,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddClicked = () => {
    onAddToFavorite(idDrink, strDrinkThumb, strDrink);
  };

  const handleToggleModalOpen = event => {
    setIsOpenModal(true);
  };

  return (
    <ul>
      <li key={idDrink}>
        <img src={strDrinkThumb} alt={strDrink} width="200px" />
        <p>{strDrink}</p>
        <button type="primary" onClick={handleToggleModalOpen}>
          Learn more
        </button>
        <button type="primary" onClick={handleAddClicked}>
          Add to 💙
        </button>
      </li>
    </ul>
  );
}
