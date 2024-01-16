import { useState, useEffect } from 'react'
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { Videos, ChannelCard } from '../../components';
import { fetchFromApi } from '../../utils/fetchFromApi';

const ChanneDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet%2Cid&order=date&id=${id}`)
      .then((data) => setChannelDetail(data.items[0]));

    fetchFromApi(`search?part=snippet&channelId=${id}`)
      .then((data) => setVideos(data.items))
  }, [id]);

  return (
    <Box sx={{
      width: '100%',
      minHeight: "100vh",
    }}>
      <div style={{
        height: '300px',
        background: 'linear-gradient(90deg, rgb(10, 200, 225), rgb(80, 10, 225) , rgb(200, 10, 200) )'
      }} />
      <ChannelCard channelDetail={channelDetail} marginTop='-93px' />
      <Videos videos={videos} /> 
    </Box>
  )
}

export default ChanneDetail