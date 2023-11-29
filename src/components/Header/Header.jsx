import { Box, styled } from '@mui/material';
import Navbar from 'components/NavBar/NavBar';
import React from 'react';

const StyledBox = styled(Box)({
  position: 'sticky',
  top: '0',
  width: '100%',
  zIndex: '1000',
});

export default function Header({ setSearchedCocktails }) {
  return (
    <StyledBox>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar setSearchedCocktails={setSearchedCocktails} />
      </Box>
    </StyledBox>
  );
}
