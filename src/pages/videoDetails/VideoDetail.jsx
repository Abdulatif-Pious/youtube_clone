import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Stack, Typography } from '@mui/material';
import  CheckCircleIcon  from '@mui/icons-material/CheckCircle';
import { grey } from '@mui/material/colors';

import { fetchFromApi } from '../../utils/fetchFromApi';
import { Loader, Videos } from '../../components';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null); 

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        
        <Box flex={1}  position='sticky'>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer  url={`https://youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography variant="h4" p={2}>
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems="center"
            >
              <Link to={`/channels/${channelId}`} style={{ alignItems: 'center' }}>
                <Typography
                  variant='h6'
                  p={2}
                  color={grey[600]}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {channelTitle}
                  <CheckCircleIcon sx={{ color: "#f51997", ml: '5px', fontSize: '16px' }} />
                </Typography>
              </Link>
              <Stack
                direction='row'
                gap={2}
              >
                <Typography
                  variant="h6"
                >
                  {parseInt(viewCount).toLocaleString()} views 
                </Typography>
                <Typography
                  variant="h6"
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box py={{ xs: 5, md: 1 }} px={2} alignItems='center' justifyContent='center'>
          <Videos videos={videos} direction='column' />
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail