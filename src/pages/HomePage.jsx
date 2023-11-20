import CocktailList from 'components/CocktailList/CocktailList';
import Hero from 'components/Hero/Hero';
import React, { useEffect, useState } from 'react';
import { getRandomCocktails } from 'utils/Api';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cocktails, setCocktails] = useState([]);

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

  return (
    <>
      <Hero />
      {cocktails.length !== 0 && (
        <CocktailList randomCocktailsData={cocktails} />
      )}
    </>
  );
}
