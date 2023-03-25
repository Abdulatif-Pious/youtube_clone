import { Box, Stack } from '@mui/material';

import {  VideoCard, Loader } from './'

const Videos = ({ videos, direction}) => {
  if (!videos?.length) return <Loader />
  
  return (
    <Stack
      direction={direction || 'row'}
      sx={{flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 2 }}
    > 
      {videos?.map((video, i) => (
        <Box
          key={`${video?.id}-${i}`}
        >
          {video?.id?.videoId && <VideoCard video={video} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;