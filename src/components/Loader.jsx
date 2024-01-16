import { Box, Stack, CircularProgress } from '@mui/material';

const Loader = () => {
  
  return (
    <Box minHeight="95vh">
      <Stack direction='row' sx={{ minWidth: "100vw" }} alignItems="center" justifyContent='center' height='100vh'>
        <CircularProgress />
      </Stack>
    </Box>
  )
}

export default Loader