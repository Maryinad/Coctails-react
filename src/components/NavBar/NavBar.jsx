import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { AppBar, Toolbar, Typography } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import SearchForm from '../SearchForm/SearchForm';
import { StyledLink, Wrapper } from './NavBar.styled';
import { Switch } from '@mui/material';

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

const Nav = styled('div')({
  display: 'flex',
  gap: '20px',
  color: '#202025',

  '@media screen and (max-width: 1200px)': {
    display: 'none',
  },
});

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const StyledSwitch = styled(Switch)({
  background: '#fd5103',
  display: { xs: 'none', sm: 'none', lg: 'block' },
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
            <Nav>
              <StyledLink>
                <Link to="/">Home</Link>
              </StyledLink>
              <Link to="/favourite">Favourite</Link>
            </Nav>
          </Container>

          <SearchForm setSearchedCocktails={setSearchedCocktails} />

          <Typography
            variant="h6"
            sx={{
              display: { xs: 'none', sm: 'none', lg: 'block' },
              color: 'black',
            }}
          ></Typography>
          <WbSunnyIcon
            sx={{
              color: '#fd5103',
              height: '40px',
              width: '40px',
              display: { xs: 'none', sm: 'none', lg: 'block' },
            }}
          />
          <StyledSwitch {...label} />
          <DarkModeIcon
            sx={{
              color: '#fd5103',
              height: '40px',
              width: '40px',
              display: { xs: 'none', sm: 'none', lg: 'block' },
            }}
          />

          <MenuIcon
            sx={{
              display: { xs: 'block', sm: 'block', lg: 'none' },
              color: 'black',
              height: '16px',
              width: '30px',
              backgroundColor: '#FFF',
            }}
          />
        </StyledToolBar>
      </AppBar>
    </Wrapper>
  );
};

export default Navbar;
