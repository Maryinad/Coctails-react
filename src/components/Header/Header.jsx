import { Box, styled } from '@mui/material';
import Navbar from 'components/NavBar/NavBar';
import React from 'react';

const StyledBox = styled(Box)({
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: '1000',
});

export default function Header({ setSearchedCocktails }) {
  return (
    <>
      <Box
        width="400px"
        sx={{ width: { xl: '1488px' } }}
        m="auto"
        position="sticky"
      >
        <Navbar setSearchedCocktails={setSearchedCocktails} />
      </Box>
    </>
  );
}
