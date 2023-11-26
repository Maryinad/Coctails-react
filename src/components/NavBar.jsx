import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import {
  AppBar,
  Menu,
  Toolbar,
  Typography,
  Search,
  InputBase,
} from '@mui/material';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';
import { MdPolicy, MdSearch } from 'react-icons/md';

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
const SearchBar = styled('div')({
  backgroundColor: 'inherit',
  color: 'black',
  width: '288px',
  height: '40px',
  borderRadius: '4px',
  border: '1px solid  #FD5103',
});

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDefault = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#FCFCFC' }}>
      <StyledToolBar>
        <Container>
          <Link to="/">
            {isMobile && <img src={logo} alt="logo" height={34} width={123} />}
            {isDefault && <img src={logo} alt="logo" height={43} width={156} />}
            {/* <img
              src={logo}
              alt="logo"
                sx={{
                  height: { xs: '34px', sm: '43px' },
                  width: { xs: '123px', sm: '156px' },
                }}
            /> */}
          </Link>
          <div>
            <Link to="/">Home</Link>
            <Link to="/favourite">Favourite</Link>
          </div>
        </Container>

        <SearchBar>
          <MdSearch
            sx={{
              width: '24px',
              height: '24px',
              color: 'FD5103',
              padding: '8px',
            }}
          />
          <InputBase placeholder="search" />
        </SearchBar>
        <Typography
          variant="h6"
          sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }}
        >
          Theme
        </Typography>

        <Menu
          sx={{
            display: { xs: 'block', sm: 'none' },
            color: 'black',
            height: '16px',
            width: '30px',
          }}
        />
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
