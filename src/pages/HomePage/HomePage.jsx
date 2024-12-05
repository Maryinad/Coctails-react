import CocktailList from 'components/CocktailList/CocktailList';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import Modal from 'components/Modal/Modal';
import Navbar from 'components/NavBar/NavBar';
import React, { useEffect, useState } from 'react';
import { getRandomCocktails, getRandomCocktailsByLetter } from 'utils/Api';
import { ContainerW } from './HomePage.styled';

export default function HomePage({
  setSearchedCocktails,
  onAddToFavorite,
  searchedCocktails,
  handleToggleModalOpen,
  selectedCoc,
  onClose,
  cocktails,
  isOpenModal,
  setCocktails,
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedChar, setSelectedChar] = useState('');
  const [previousChar, setPreviousChar] = useState('');

  const getCocktails = async (newChar, oldChar) => {
    try {
      if (newChar !== oldChar) {
        setPreviousChar(newChar);
        if (newChar) {
          const response = await getRandomCocktailsByLetter(newChar);
          console.log('responseSelectLet', response);
          const cocktailsResult = response.drinks;
          setCocktails(cocktailsResult);
        }
      } else {
        const randomCocktailsResult = await getRandomCocktailsByLetter('M');
        console.log('randomCocktailsResultM', randomCocktailsResult);

        setCocktails(randomCocktailsResult.drinks);
      }
    } catch (error) {
      alert('Ooops, something went wrong');
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCocktails(selectedChar, previousChar);
  }, []);

  return (
    <>
      <Header setSearchedCocktails={setSearchedCocktails} />
      <ContainerW>
        <Hero
          setSelectedChar={setSelectedChar}
          getCocktails={getCocktails}
          previousChar={previousChar}
        />
        {searchedCocktails && searchedCocktails.length !== 0 ? (
          <CocktailList
            handleToggleModalOpen={handleToggleModalOpen}
            randomCocktailsData={searchedCocktails}
            onAddToFavorite={onAddToFavorite}
          />
        ) : (
          <CocktailList
            handleToggleModalOpen={handleToggleModalOpen}
            randomCocktailsData={cocktails}
            onAddToFavorite={onAddToFavorite}
          />
        )}
      </ContainerW>
      <Footer />

      {isOpenModal && (
        <Modal
          onClose={onClose}
          data={selectedCoc}
          onAddToFavorite={onAddToFavorite}
          currentPage="home"
        />
      )}
    </>
  );
}
