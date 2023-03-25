import { useState, useEffect } from 'react'
import { Box, Typography  } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromApi } from '../../utils/fetchFromApi';
import { Videos } from '../../components';

const SearchTerm = () => {
  const [videos, setVideos] = useState(null);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box minHeight='95vh' p={2}>

      <Typography
        variant='h4'
        fontWeight= {700}
        mb= {3}
        sx= {{
          textAlign: 'center'
        }}
      >
        Search Results for {" "} 
        <span style={{ color: "#f51997" }}>
          {searchTerm}
        </span>{" "} videos
      </Typography>
      
      <Videos  videos={videos} />
    </Box>
  )
}

export default SearchTerm