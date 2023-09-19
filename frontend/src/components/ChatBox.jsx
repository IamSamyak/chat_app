import { Avatar, Box, Stack, Typography } from "@mui/material"
import ChatBoxBar from "../chatBoxComponents/ChatBoxBar"
import TextInput from "../chatBoxComponents/TextInput"
import { useFetchRecipientUser } from "../hooks/useFetchRecipient"
import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"
import moment from 'moment';

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);
  const scroll = useRef();

  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"});
  },[messages])
  if (!recipientUser) return (
    <p style={{ textAlign: 'center', width: '100%' }}>No conversation selected yet</p>)
  if (isMessagesLoading) return (<p style={{ textAlign: 'center', width: '100%' }}>Loading Chat...</p>)
  return (
    <Stack>
    <ChatBoxBar/>
    <Stack sx={{width:'100%',minHeight: 'calc(100vh - 9.5rem)',height: 'calc(100vh - 9.5rem)',maxHeight: 'calc(100vh - 9.5rem)', overflowY: 'auto' }}>
    {messages && messages.map((message, index) => {return (
          <Stack key={index} marginTop={1.3} direction={`${message?.senderId === user?._id ? "row-reverse" : "row"}`}  ref = {scroll}>
          <Avatar variant="square" alt="Remy Sharp" src={message?.senderId === user?._id ? user.avtImg : recipientUser.avtImg} sx={message?.senderId === user?._id ?
           {borderRadius: 3,marginRight:3,marginTop:0.4} : {borderRadius: 3,marginLeft:3,marginTop:0.4}}/>
          <Typography sx={message?.senderId === user?._id ? {fontWeight: 500, fontSize: 14,marginRight:1.5,padding:'0.75rem',borderRadius:'15px',maxWidth:'50%',bgcolor:'#1A1A1A'} :
           {fontWeight: 500, fontSize: 14,marginLeft:1.5,padding:'0.75rem',borderRadius:'15px',maxWidth:'50%',bgcolor:'#1A1A1A'}}>{message.text} </Typography>
           <Typography sx={{fontSize:10}}>{moment(message?.createdAt).calendar()}</Typography>
        </Stack>
    )}
        )}
    </Stack>
    <Box>
    <TextInput/>
    </Box>
    </Stack>
  )
}

export default ChatBox
