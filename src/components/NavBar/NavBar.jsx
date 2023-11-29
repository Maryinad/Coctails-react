import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';
import { MdSearch } from 'react-icons/md';
import SearchForm from '../SearchForm/SearchForm';
import { Wrapper } from './NavBar.styled';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Container = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '43px',
  justifyContent: 'space-between',
});

const Navbar = ({ setSearchedCocktails }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDefault = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <Wrapper>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#FCFCFC',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <StyledToolBar>
          <Container>
            <Link to="/">
              {isMobile && (
                <img src={logo} alt="logo" height={34} width={123} />
              )}
              {isDefault && (
                <img src={logo} alt="logo" height={43} width={156} />
              )}
            </Link>
            <div>
              <Link to="/">Home</Link>
              <Link to="/favourite">Favourite</Link>
            </div>
          </Container>
          <SearchForm setSearchedCocktails={setSearchedCocktails} />

          <Typography
            variant="h6"
            sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }}
          >
            Theme
          </Typography>

          <MenuIcon
            sx={{
              display: { xs: 'block', sm: 'none' },
              color: 'black',
              height: '16px',
              width: '30px',
            }}
          />
        </StyledToolBar>
      </AppBar>
    </Wrapper>
  );
};

export default Navbar;
