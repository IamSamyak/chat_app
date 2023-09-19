import { Grid } from '@mui/material';
import ChatList from '../components/ChatList';
import ChatBox from '../components/ChatBox';
import CurrentUser from '../components/CurrentUser';

const ChatRoom = () => {
  return (
    <Grid container >
      <Grid item xs={3.5} sx={{bgcolor:'#1A1A1A'}} >
        <ChatList/>
      </Grid>
      <Grid item xs={7.7} sx={{bgcolor:'#010100'}}>
        <ChatBox/>
      </Grid>
      <Grid item xs={0.8} sx={{bgcolor:'#1A1A1A'}}>
        <CurrentUser/>
      </Grid>
    </Grid>
  )
}

export default ChatRoom
