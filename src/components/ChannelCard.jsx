import { Box, CardMedia, CardContent, Typography } from '@mui/material';
import { grey } from '@mui/material/colors'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import{ demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop,
      }}
    >
      <CardContent sx={{
        textAlign: 'center',
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
        <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.brandingSettings?.channel?.title}
          sx={{  width: '180px', height: '180px',  borderRadius: '50%',  mb: 5, border: '1px solid #f5199750 '}}
        />
        <Typography
          variant='h5'
          sx={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {channelDetail?.brandingSettings?.channel?.title}
          <CheckCircleIcon sx={{ color: "#f51997", fontSize: '16px', ml: 2 }} />
        </Typography>
        <Typography
          variant='h6'
          color={grey[500]}
        >
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
        </Typography>
      </CardContent>
    </Box>
  )
}

export default ChannelCard