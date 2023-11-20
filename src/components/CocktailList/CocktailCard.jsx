import React from 'react';

export default function CocktailCard({ idDrink, strDrinkThumb, strDrink }) {
  return (
    <ul>
      <li key={idDrink}>
        <img src={strDrinkThumb} alt={strDrink} width="200px" />
        <p>{strDrink}</p>
        <button>Learn more</button>
        <button>Add to 💙</button>
      </li>
    </ul>
  );
}
