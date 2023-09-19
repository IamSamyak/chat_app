import { Typography, Avatar, Grid, Stack } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { useFetchRecipientUser } from '../hooks/useFetchRecipient';

const ChatBoxBar = () => {
    const {user} = useContext(AuthContext);
    const { currentChat,onlineUsers } = useContext(ChatContext);
    const {recipientUser} = useFetchRecipientUser(currentChat,user);
    
      return (
            <Grid container height={'10vh'} alignItems={'center'} bgcolor={'#010100'} sx={{width:'100%',marginTop:'0vh'}}>
                <Grid item xs={1} >
                    <Avatar variant="square" alt="Remy Sharp" src={recipientUser?.avtImg} sx={{ borderRadius: 3,marginLeft:3 }}/>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ fontWeight: 700, fontSize: 17 }}>{recipientUser?.name}</Typography>
                    {onlineUsers?.some((user)=> user?.userId === recipientUser?._id)?<Stack direction={'row'}>
                        <Typography sx={{ fontSize: 13, fontWeight: 500 }}>Online</Typography>
                        <CircleIcon sx={{ color: '#5EFE41', fontSize: 15, marginLeft: 0.5, marginTop: 0.3 }} />
                    </Stack>:null}
                </Grid>
                <Grid item xs={7.5} alignItems={'end'} justifyContent={'end'}>
                    <Stack direction={'row'} marginLeft={62} spacing={3}>
                        <Avatar sx={{ bgcolor: '#F6F6F6' }}>
                            <CallIcon sx={{ color: 'black' }} />
                        </Avatar>
                        <Avatar sx={{ bgcolor: '#F6F6F6' }}>
                            <VideocamIcon sx={{ color: 'black' }} />
                        </Avatar>
                    </Stack>
                </Grid>
            </Grid>
    )
}

export default ChatBoxBar
