import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import {
  Backdrop,
  ButtonAdd,
  ButtonClose,
  Instructions,
  Item,
  ModalWrap,
  Name,
  Text,
  Title,
  Wrapper,
  WrapperInstr,
} from './Modal.styled';

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
        <Wrapper>
          <img
            src={data?.strDrinkThumb}
            alt={data?.strDrinkThumb}
            width="200px"
          ></img>

          <div>
            <Name>{data?.strDrink}</Name>
            <Title>Ingrеdiens</Title>
            <Text>Per cocktail</Text>
            <ul>
              {data &&
                data.strIngredient &&
                data.strIngredient
                  .slice(0, 4)
                  .map((ingredient, index) => (
                    <Item key={index}>🔸 {ingredient}</Item>
                  ))}
            </ul>
          </div>
        </Wrapper>
        <div>
          <WrapperInstr>
            <p>Instructions:</p>
            <Instructions>{data.strInstructions}</Instructions>
          </WrapperInstr>
          {currentPage === 'home' ? (
            <ButtonAdd type="primary" onClick={handleAddClicked}>
              Add to favorite 🧡
            </ButtonAdd>
          ) : (
            <button
              type="primary"
              onClick={() => handleRemoveFromFavorite(data.id)}
            >
              Remove from favourite 🧡
            </button>
          )}
        </div>
      </ModalWrap>
    </Backdrop>,
    document.getElementById('modal')
  );
}
