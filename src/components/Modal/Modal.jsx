import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import { Backdrop, ButtonClose, ModalWrap } from './Modal.styled';

const modalRoot = document.getElementById('modal');

export default function Modal({
  onClose,
  data,
  onAddToFavorite,
  currentPage,
  handleRemoveFromFavorite,
}) {
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

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
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

  console.log('data', data);

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalWrap>
        <ButtonClose type="button">
          <MdClose
            style={{ width: 20, height: 20 }}
            onClick={() => onClose()}
          />
        </ButtonClose>
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
        {currentPage === 'home' ? (
          <button type="primary" onClick={handleAddClicked}>
            Add to favorite 💙
          </button>
        ) : (
          <button
            type="primary"
            onClick={() => handleRemoveFromFavorite(data.id)}
          >
            Remove from favourite 💙
          </button>
        )}
      </ModalWrap>
    </Backdrop>,
    document.getElementById('modal')
  );
}
