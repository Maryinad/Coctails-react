import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

export default function Modal({ onClose }) {
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

    //__________________ Где она должна быть?
    // мне нужно обновить стейт в фаворит пейдж и удалить коктейль оттуда

    const handleRemoveFromFavorite = () => {};

    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [onClose]);

  return createPortal(
    <div onClick={onBackdropClick}>
      <div>
        <button type="button">
          <MdClose
            style={{ width: 20, height: 20 }}
            onClick={() => onClose()}
          />
        </button>
        <div>
          <img></img>
          <div>
            <h2>{}name</h2>
            <h3>Ingridiens</h3>
            <p>Per cocktail</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div>
          <p>Instructions:</p>
          <p></p>
        </div>
        <button type="primary" onClick={handleRemoveFromFavorite}>
          Remove from favorite
        </button>
      </div>
    </div>,
    document.getElementById('modal')
  );
}
