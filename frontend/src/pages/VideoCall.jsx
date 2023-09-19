import React from 'react'
import ReactPlayer from 'react-player/lazy';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CallEndOutlinedIcon from '@mui/icons-material/CallEndOutlined';
import { Avatar, Stack } from '@mui/material';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

const VideoCall = () => {
  // const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  // const { me, setName, leaveCall, callUser } = useContext(SocketContext);
  return (
    <>
     <ReactPlayer url='https://youtu.be/-aQMjByEeo8?si=DtaIXp4ewwPtNcsO' width={'100%'} height={'99.5vh'}/>
        <Stack direction={'row'} spacing={4} sx={{position:'absolute', top:'90vh', left:'45%'}}>
        <Avatar sx={{bgcolor: '#E4564C' }}>
        <CallEndOutlinedIcon/>
        </Avatar>
        <Avatar sx={{bgcolor: '#FFFDFB' }}>
        <MicNoneOutlinedIcon sx={{ color: '#2C8AC6' }} />
        </Avatar>
        <Avatar sx={{bgcolor: '#FFFDFB' }}>
        <VideocamOutlinedIcon sx={{ color: '#2C8AC6' }} />
        </Avatar>
        </Stack>
        <Avatar sx={{bgcolor: '#9294A7',position:'absolute', top:'5vh', left:'93%', height: 28 ,width: 28}}>
        <VolumeMuteIcon sx={{fontSize:'20px'}} />
        </Avatar>
       <ReactPlayer url='https://youtu.be/-aQMjByEeo8?si=DtaIXp4ewwPtNcsO' width={'20%'} height={'20vh'} style={{position:'absolute', top:'70vh', left:'75%'}}/>
    </>
  )
}

export default VideoCall
