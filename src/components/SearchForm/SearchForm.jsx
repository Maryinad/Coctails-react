import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { InputBase } from '@mui/material';
import styled from 'styled-components';
import { getCocktailByName } from 'utils/Api';

const SearchBar = styled('div')({
  backgroundColor: 'inherit',
  color: 'black',
  width: '288px',
  height: '40px',
  borderRadius: '4px',
  border: '1px solid #FD5103',
  display: 'flex',
  alignItems: 'center',

  '@media screen and (max-width: 767px)': {
    display: 'none',
  },
});

const SearchBtn = styled('button')({
  backgroundColor: '#FFFFFF',
  color: '#FD5103',
  border: 'none',
});

export default function SearchForm({ setSearchedCocktails }) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await getCocktailByName(search);
      console.log('response1', response);
      setSearchedCocktails(response.drinks);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search.trim() !== '') {
      handleSearch();
    } else {
      setSearchedCocktails([]);
    }
  }, [search]);

  return (
    <div>
      <SearchBar>
        <SearchBtn onClick={handleSearch}>
          <MdSearch
            sx={{
              width: '24px',
              height: '24px',
              color: 'FD5103',
              padding: '8px',
            }}
          />
        </SearchBtn>
        <InputBase
          type="text"
          placeholder="search"
          value={search}
          onChange={event => setSearch(event.target.value.toLowerCase())}
        />
      </SearchBar>
    </div>
  );
}
