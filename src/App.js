import { Box } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Home, ChannelDetail, VideoDetail, SearchTerm } from './pages'

const App = () => {
  let theme = createTheme(); 
  theme = responsiveFontSizes(theme);
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ backgroundColor : grey[100], }}  className="scrollbar">
          {/* NAVBAR */}
          <Navbar />

          {/*MAIN */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/channels/:id" element={<ChannelDetail />}  />
            <Route path="/videos/:id" element={<VideoDetail />} />
            <Route path="/search/:searchTerm" element={<SearchTerm />} />
          </Routes>
        </Box>
      </Router> 
    </ThemeProvider>
  )
};

export default App;
