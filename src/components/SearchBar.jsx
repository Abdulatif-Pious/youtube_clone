import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material';
import  SearchIcon  from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)

      setSearchTerm("")
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        pl: 2,
        mr: { sm : 5},
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        cursor: 'pointer',
      }}
    >
      <input 
        type="text"
        placeholder="Search..."
        style={{border: 0, outline: 0, maxWidth: '250px', backgroundColor: 'transparent' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton onClick={handleSubmit} sx={{p : '10px', color: 'red'}}>
          <SearchIcon  />
      </IconButton>
    
      </Paper>
  )
}

export default SearchBar