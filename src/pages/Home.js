import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from '../components';
import { fetchFromApi } from '../utils/fetchFromApi';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(error))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx : 'column', md : 'row'}, overflowY: 'hidden' }}>
      <Box sx={{ height : { sx : 'auto', md : '100vh' }, minWidth: '250px', overflowY: 'hidden', borderRight: "1px solid #bdbdbd", backgroundColor: 'white'}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography
          variant="body2"
          sx={{
            padding: 2,
            display: { xs: 'none', md: 'block' }
          }}
        >
          Copyright  © Abdulatif 2023
        </Typography>
      </Box>
      <Box p={4} sx={{ overflowX: 'auto', height: '90vh' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            textAlign: 'center'
          }}
        >
          <span style={{ color: '#f51997' }}>
            {selectedCategory}
          </span>{" "}
          videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Home; 