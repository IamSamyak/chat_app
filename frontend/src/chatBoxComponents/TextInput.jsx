import { Stack, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InputEmoji from 'react-input-emoji';
import { useContext, useState } from 'react';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';

const TextInput = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, sendTextMessage } = useContext(ChatContext);
  const [textMessage, setTextMessage] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendTextMessage(textMessage, user, currentChat._id, setTextMessage)
    }
  };
  return (

    <Stack direction="horizontal" gap={1}
      sx={{
        width: '55%',
        marginLeft: '6%',
        maxWidth: '100%',
        color: 'white',
        position: 'fixed',
        top: 'calc(100vh - 4rem)'
      }}
    >
      <InputEmoji value={textMessage} onChange={setTextMessage} onKeyDown={handleKeyPress}/>
      <Avatar sx={{ bgcolor: '#F6F6F6', marginTop: 0.6 }} onClick={() => sendTextMessage(textMessage, user, currentChat._id, setTextMessage)}>
        <SendIcon sx={{ color: 'black' }} />
      </Avatar>
    </Stack>

  )
}

export default TextInput
