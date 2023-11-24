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

export default function Hero({ onAlphabetClick, onNumbersClick }) {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleAlphabetClick = letter => {
    setSelectedLetter(letter);

    onAlphabetClick(letter);
  };

  const handleNumbersClick = number => {
    setSelectedNumber(number);
    onNumbersClick(number);
  };

  useEffect(() => {
    const selectedValue = selectedLetter || selectedNumber;
    if (selectedValue) {
      onAlphabetClick(selectedValue);
    }
  }, [selectedLetter, selectedNumber, onAlphabetClick, onNumbersClick]);

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
                onClick={() => handleAlphabetClick(letter)}
                selected={selectedLetter === letter}
              >
                {letter}
              </DefaultElement>
            ))}
          </Alphabet>
          <Numbers>
            {numbers.map(number => (
              <DefaultElement
                key={number}
                onClick={() => handleNumbersClick(number)}
                selected={selectedNumber === number}
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
