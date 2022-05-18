import React, { useContext, useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../utils/darth-vader.png';
import logo_white from '../utils/darth-vader_2.png';
import { ContextAPI } from '../utils/context';
import { BiHome } from 'react-icons/bi';

const Header = () => {
  const [query, setQuery] = useState('');
  const { darkMode } = useContext(ContextAPI);
  let navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/search?name=${query}`);
  };
  return (
    <header style={{ display: 'flex', flexFlow: 'column' }}>
      {darkMode ? (
        <img
          src={logo_white}
          alt='logo'
          style={{ margin: 'auto', width: '200px' }}
        />
      ) : (
        <img src={logo} alt='logo' style={{ margin: 'auto', width: '200px' }} />
      )}
      <nav style={{ margin: '20px auto' }}>
        <NavLink
          to='/'
          style={
            darkMode
              ? { cursor: 'pointer', color: 'white' }
              : { cursor: 'pointer', color: 'red' }
          }
        >
          <BiHome />
        </NavLink>
      </nav>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            width: '50%',
            margin: 'auto',
          }}
        >
          <TextField
            label='Search Character'
            placeholder='Search Character'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
            size='small'
            style={darkMode ? { color: 'white' } : {}}
            variant='outlined'
          />
          <IconButton type='submit' color='secondary' size='small'>
            <BsSearch />
          </IconButton>
        </div>
      </form>
    </header>
  );
};

export default Header;
