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

  useEffect(() => {
    async function fetchData() {
      try {
        const randomCocktailsResult = await getRandomCocktails();
        console.log('randomCocktailsResult', randomCocktailsResult);
        setCocktails(randomCocktailsResult);
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

  const handleToggleModalOpen = event => {
    setIsOpenModal(true);
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
          randomCocktailsData={cocktails}
          onAddToFavorite={onAddToFavorite}
        />
      )}
      <Modal cocktailsData={cocktails} onClose={onClose} />
    </>
  );
}
