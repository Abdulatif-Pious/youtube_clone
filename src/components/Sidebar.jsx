import React from 'react'
import { Stack, Typography } from '@mui/material';


import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      className='scrollbar'
      direction='row'
      sx={{ 
        overflowX: "hidden", 
        "&:hover": {
          overflowX: "auto",
        },
        flexDirection: {  md: 'column' }, 
        minHeight: { sx: 'auto', md: '100vh' },
        p: 2,
      }}
      
    >  
      {categories.map((category) => (
          <button
            key={category.name}
            className='category-btn'
            style={{ 
              background: category.name === selectedCategory && '#f51997',  
              color:  category.name === selectedCategory && 'white'
          }}
            onClick={() => setSelectedCategory(category.name)}
          >
            <Typography 
              variant="body2"
              style={{
                color:  category.name === selectedCategory ? 'white' : '#f51997'
              }}
            >
              {category.icon} 
            </Typography>
            <Typography
              variant='body2'
              sx={{ ml: 1 }}
            >
            {category.name}
            </Typography>
          </button>    
      ))}
      <Typography
        variant="body2"
        sx={{
          padding: 2,
          pb: 6,
          display: { xs: 'none', md: 'block' }
        }}
      >
        Copyright  © Youtube 2023
      </Typography>
    </Stack>
  )
}

export default Sidebar