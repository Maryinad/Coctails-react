import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

export default function Modal({ onClose, data }) {
  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscapeClick = event => {
      if (event.code === 'Escape') {
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
          <img src={data.strDrinkThumb} alt={data.strDrinkThumb}></img>
          <div>
            <h2>{data.strDrink}</h2>
            <h3>Ingrеdiens</h3>
            <p>Per cocktail</p>
            <ul>
              <li>{data.strIngredient1}</li>
              <li>{data.strIngredient2}</li>
            </ul>
          </div>
        </div>
        <div>
          <p>Instructions:</p>
          <p>{data.strInstructions}</p>
        </div>
        <button type="primary">Remove from favorite</button>
      </div>
    </div>
  );
}

// onClick = { handleRemoveFromFavorite };
