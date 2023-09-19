import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SingleUser from '../chatListComponents/SingleUser';
import PotentialChats from './PotentialChats';
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';
// import SearchUser from '../chatListComponents/SearchUser';

const ChatList = () => {
  const {userChats,isUserChatsLoading,updateCurrentChat} = useContext(ChatContext);
  const {user} = useContext(AuthContext);

  return (
    <Box sx={{ width: '100%',height:'100vh',borderRadius:'18px'}} margin={0}>
      <PotentialChats/>
      {/* <SearchUser userChats={userChats} user={user}/> */}
    <Stack spacing={0.3}>
        {isUserChatsLoading && <p>Loading Chats...</p>}
         {
          userChats?.map((chat,index) =>{return (<div  key={index} onClick={() => updateCurrentChat(chat)}><SingleUser className='SingleUser' chat={chat} user={user}/></div> )})
         }
    </Stack>
  </Box>
  )
}

export default ChatList