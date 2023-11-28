import React, { useEffect, useState } from 'react';

import heroImage from '../../images/hero/coctail/heroImage.png';
import {
  Alphabet,
  Container,
  DefaultElement,
  Numbers,
  Text,
  Title,
} from './Hero.styled';

const englishAlphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export default function Hero({ setSelectedChar, getCocktails, previousChar }) {
  const handleCharChange = newChar => {
    setSelectedChar(newChar);
    getCocktails(newChar, previousChar);
  };

  return (
    <div>
      <Container>
        <div>
          <Title>A party without cocktails is not like a party</Title>
          <Text>Search your favorite cocktail by ABC </Text>
          <Alphabet>
            {englishAlphabet.map(letter => (
              <DefaultElement
                key={letter}
                onClick={e => handleCharChange(e.target.outerText)}
              >
                {letter}
              </DefaultElement>
            ))}
          </Alphabet>
          <Numbers>
            {numbers.map(number => (
              <DefaultElement
                key={number}
                onClick={e => handleCharChange(e.target.outerText)}
              >
                {number}
              </DefaultElement>
            ))}
          </Numbers>
        </div>

        <img src={heroImage} alt="cocktail"></img>
      </Container>
    </div>
  );
}
