import React from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <Paper
        component='form'
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search Character'
          inputProps={{ 'aria-label': 'search character' }}
        />
        <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
          <BsSearch />
        </IconButton>
      </Paper>
    </header>
  );
};

export default Header;
