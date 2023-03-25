import React from 'react'
import { Stack, Typography } from '@mui/material';


import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction='row'
      sx={{ 
        overflowY : 'auto',
        flexDirection: {  md: 'column' }, 
        height: { sx: 'auto', md: '90%' },
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

    </Stack>
  )
}

export default Sidebar