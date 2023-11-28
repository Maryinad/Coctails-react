import CocktailList from 'components/CocktailList/CocktailList';
import Hero from 'components/Hero/Hero';
import Modal from 'components/Modal/Modal';
import Navbar from 'components/NavBar';
import React, { useEffect, useState } from 'react';
import { getRandomCocktails, getRandomCocktailsByLetter } from 'utils/Api';

export default function HomePage({ onAddToFavorite, searchedCocktails }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCoc, setSelectedCoc] = useState({});

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
          // setLoading(false);
        }
      } else {
        const randomCocktailsResult1 = await getRandomCocktails();
        const randomCocktailsResult2 = await getRandomCocktails();
        const randomCocktailsResult3 = await getRandomCocktails();

        setCocktails([
          randomCocktailsResult1[0],
          randomCocktailsResult2[0],
          randomCocktailsResult3[0],
        ]);
      }
    } catch (error) {
      alert('Ooops, something went wrong');
      setError(error.message);
      setLoading(false);
    }
  };
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const randomCocktailsResult1 = await getRandomCocktails();
  //       const randomCocktailsResult2 = await getRandomCocktails();
  //       const randomCocktailsResult3 = await getRandomCocktails();

  //       setCocktails([
  //         randomCocktailsResult1[0],
  //         randomCocktailsResult2[0],
  //         randomCocktailsResult3[0],
  //       ]);

  //       setLoading(false);
  //     } catch (error) {
  //       alert('Ooops, something went wrong');
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    getCocktails(selectedChar, previousChar);
  }, []);

  const handleToggleModalOpen = index => {
    const selectedCocktail = cocktails[index];

    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = selectedCocktail[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }

    setSelectedCoc({
      id: selectedCocktail.idDrink,
      strDrinkThumb: selectedCocktail.strDrinkThumb,
      strDrink: selectedCocktail.strDrink,
      strInstructions: selectedCocktail.strInstructions,
      strIngredient: ingredients,
    });

    setIsOpenModal(true);
    console.log('setSelectedCoc', selectedCoc);
  };

  const onClose = () => {
    setIsOpenModal(false);
    document.body.classList.remove('noScrool');
  };

  return (
    <>
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

      {isOpenModal && (
        <Modal
          onClose={onClose}
          data={selectedCoc}
          onAddToFavorite={onAddToFavorite}
        />
      )}
    </>
  );
}
