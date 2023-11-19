import axios from 'axios';

const BASE_URL = `https://thecocktaildb.com/api/json/v1/1`;

export async function getRandomCocktails() {
  const response = await axios.get(`${BASE_URL}/random.php`);
  const randomCocktails = response.results;

  console.log('response', response.results);

  return randomCocktails;
}

export async function getRandomCocktailsByLetter(letter) {
  const response = await axios.get(`${BASE_URL}/search.php?f=${letter}`);
  const cocktails = response.results;
  return cocktails;
}

export async function getCocktailByName(coctailName) {
  const response = await axios.get(`${BASE_URL}/search.php?s=${coctailName}`);
  const cocktail = response.results;
  return cocktail;
}

export async function getCocktailById(cocktailId) {
  const response = await axios.get(`${BASE_URL}/lookup.php?i=${cocktailId}`);
  const cocktails = response.results;
  return cocktails;
}

export async function getCocktailById(cocktailId) {
  const response = await axios.get(`${BASE_URL}/lookup.php?i=${cocktailId}`);
  const cocktails = response.results;
  return cocktails;
}
