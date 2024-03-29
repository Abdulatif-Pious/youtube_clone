import React from 'react'
import { Link } from 'react-router-dom';
import {  Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

import { logo } from '../utils/constants';
import { SearchBar } from './';


const Navbar = () => {
  return (
    <Stack 
      direction="row"
      p={2}
      sx={{ alignItems: "center",  justifyContent : "space-between", top: 0, position: "sticky", backgroundColor: grey[200], zIndex: 10}}
    >
      <Link to="/">
        <img 
          src={logo}
          alt="logo"
          height={45}
        />
      </Link>

      <SearchBar  />
    </Stack>
    
  )
}

export default Navbar