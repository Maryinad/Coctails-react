import axios from 'axios';

const BASE_URL = `https://thecocktaildb.com/api/json/v1/1`;

export async function getRandomCocktails() {
  const response = await axios.get(`${BASE_URL}/random.php`);
  const randomCocktails = response.data.drinks;

  console.log('response', randomCocktails);

  return randomCocktails;
}

export async function getRandomCocktailsByLetter(char) {
  const response = await axios.get(`${BASE_URL}/search.php?f=${char}`);
  const cocktails = response.data;
  return cocktails;
}

export async function getCocktailByName(coctailName) {
  const response = await axios.get(`${BASE_URL}/search.php?s=${coctailName}`);
  const cocktail = response.data;
  return cocktail;
}

export async function getCocktailById(cocktailId) {
  const response = await axios.get(`${BASE_URL}/lookup.php?i=${cocktailId}`);
  const cocktails = response.data;
  return cocktails;
}
