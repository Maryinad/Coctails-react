import CocktailList from 'components/CocktailList/CocktailList';
import Hero from 'components/Hero/Hero';
import Modal from 'components/Modal/Modal';
import React, { useEffect, useState } from 'react';
import { getRandomCocktails } from 'utils/Api';

export default function HomePage({ onAddToFavorite }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCoc, setSelectedCoc] = useState({});

  let idDrink = '';
  let strDrinkThumb = '';
  let strDrink = '';

  useEffect(() => {
    async function fetchData() {
      try {
        const randomCocktailsResult1 = await getRandomCocktails();
        const randomCocktailsResult2 = await getRandomCocktails();
        const randomCocktailsResult3 = await getRandomCocktails();

        setCocktails([
          randomCocktailsResult1[0],
          randomCocktailsResult2[0],
          randomCocktailsResult3[0],
        ]);

        setLoading(false);
      } catch (error) {
        alert('Ooops, something went wrong');
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleToggleModalOpen = index => {
    const selectedCocktail = cocktails[index];

    setSelectedCoc({
      id: selectedCocktail.idDrink,
      strDrinkThumb: selectedCocktail.strDrinkThumb,
      strDrink: selectedCocktail.strDrink,
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
      <Hero />
      {cocktails && cocktails.length !== 0 && (
        <CocktailList
          handleToggleModalOpen={handleToggleModalOpen}
          randomCocktailsData={cocktails}
          onAddToFavorite={onAddToFavorite}
        />
      )}
      {isOpenModal && <Modal onClose={onClose} data={selectedCoc} />}
    </>
  );
}
