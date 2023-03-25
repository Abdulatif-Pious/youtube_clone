import { Box, Stack, CircularProgress } from '@mui/material';

const Loader = () => {
  
  return (
    <Box minHeight="95vh">
      <Stack direction='row' alignItems="center" justifyContent='center' height='80vh'>
        <CircularProgress />
      </Stack>
    </Box>
  )
}

export default Loader