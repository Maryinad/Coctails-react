import { Backdrop } from '@mui/material';
import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { CloseBtn } from './Modal.styled';

export default function Modal({ onClose, data, onAddToFavorite }) {
  console.log('data', data);
  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleAddClicked = () => {
    const { idDrink, strDrinkThumb, strDrink, strInstructions, strIngredient } =
      data || {};

    onAddToFavorite(
      idDrink,
      strDrinkThumb,
      strDrink,
      strInstructions,
      strIngredient
    );
  };

  useEffect(() => {
    const onEscapeClick = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscapeClick);

    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [onClose, data]);

  return (
    <div onClick={onBackdropClick}>
      <div>
        <button type="button">
          <MdClose
            style={{ width: 20, height: 20 }}
            onClick={() => onClose()}
          />
        </button>
        <div>
          <img
            src={data?.strDrinkThumb}
            alt={data?.strDrinkThumb}
            width="200px"
          ></img>

          <div>
            <h2>{data?.strDrink}</h2>
            <h3>Ingrеdiens</h3>
            <p>Per cocktail</p>
            <ul>
              {data &&
                data.strIngredient &&
                data.strIngredient.map((ingredient, index) => (
                  <li key={index}>🔸 {ingredient}</li>
                ))}
            </ul>
          </div>
        </div>
        <div>
          <p>Instructions:</p>
          <p>{data.strInstructions}</p>
        </div>
        <button type="primary" onClick={handleAddClicked}>
          Add to favorite
        </button>
      </div>
    </div>
  );
}

// onClick = { handleRemoveFromFavorite };
