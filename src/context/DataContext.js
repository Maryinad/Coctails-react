import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCoc, setSelectedCoc] = useState({});
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);
  const [searchedCocktails, setSearchedCocktails] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <DataContext.Provider
      value={{
        cocktails,
        setCocktails,
        selectedCoc,
        setSelectedCoc,
        favoriteCocktails,
        setFavoriteCocktails,
        searchedCocktails,
        setSearchedCocktails,
        selectedTheme,
        setSelectedTheme,
        isOpenModal,
        setIsOpenModal,
      }}
    ></DataContext.Provider>
  );
};
