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
    <Stack  sx={{ flexDirection: { sx : 'column', md : 'row',}}}>
      <Box 
        className="scrollbar"
        sx={{ minHeight : { xs : 'auto', md : '100vh' },  overflowY: "hidden", "&:hover": { overflowY: "auto" }, position: { md: "fixed" }, top: 0, bottom: 0, minWidth: '300px',  borderRight: "1px solid #bdbdbd50", backgroundColor: 'white'}}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </Box>

      <Box  p={4} sx={{ minHeight: '100vh', pl: { md: "300px" }}}>
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