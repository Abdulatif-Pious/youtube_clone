import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import  CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

import { demoThumbnailUrl, demoVideoUrl,  demoVideoTitle, demoChannelUrl } from '../utils/constants'

const VideoCard = ({ video }) => {

  return (
    <Card
      sx={{ width : { xs : '250px', sm: '358px', md: '320px', height : '350px' }}}
    >
      <Link to={video?.id?.videoId ? `/videos/${video?.id?.videoId}` : `videos/cV2gBU6hKfY`}>
        <CardMedia 
          image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={video?.snippet?.title}
          sx={{ width : { sx: '100%', sm: '358px' }, height : '180px' }}
        />
      </Link>

      <CardContent sx={{  height: '106px' }}>
        <Link to={video?.id?.videoId ? `/videos/${video?.id?.videoId}` : demoVideoUrl} >
          <Typography
            variant='subtitle1'
            sx={{ fontWeight: "bolder" }}
            className={video?.snippet?.title.length > 60 ? 'truncate' : null}
          >
            {video?.snippet?.title ? video?.snippet?.title.slice(0, 60) : demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={video?.snippet?.channelId ? `/channels/${video?.snippet?.channelId}` : demoChannelUrl}>
          <Typography
            variant='subtitle2'
            color={grey[600]}
          >
            {video?.snippet?.channelTitle}
            <CheckCircleIcon sx={{ color: '#f51997', fontSize : '12px', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard