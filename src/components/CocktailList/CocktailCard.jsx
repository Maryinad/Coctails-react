// import { Container } from '@mui/material';
import React from 'react';
import {
  BtnBaseText,
  BtnMainText,
  ButtonBase,
  ButtonMain,
  CardContainer,
  CardImg,
  Title,
  Wrapper,
} from './CoctailCard.styled';

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
    <CardContainer key={idDrink}>
      <CardImg src={strDrinkThumb} alt={strDrink} />
      <Title>{strDrink}</Title>
      <Wrapper>
        <ButtonMain type="button" onClick={() => handleToggleModalOpen(index)}>
          <BtnMainText>Learn more</BtnMainText>
        </ButtonMain>
        <ButtonBase type="button" onClick={handleAddClicked}>
          <BtnBaseText>Add to 🧡</BtnBaseText>
        </ButtonBase>
      </Wrapper>
    </CardContainer>
  );
}
