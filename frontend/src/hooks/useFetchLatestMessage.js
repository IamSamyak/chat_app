import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { baseUrl, getRequest } from "../utils/services";
import { AuthContext } from "../context/AuthContext";

export const useFetchLatestMessage = (chat) => {
   const {setUserChats} = useContext(ChatContext);
   const {user} = useContext(AuthContext);
   const [latestMessage,setLatestMessage] = useState(null);

   useEffect(()=>{
    const getMessages = async () => {
        const response = await getRequest(`${baseUrl}/messages/${chat?._id}`);
        const chats = await getRequest(`${baseUrl}/chats/${user?._id}`);

        if(response.error){
            return console.log('Error getting messages...',response.error);
        }

        const lastMessage = response[response?.length - 1];

        setLatestMessage(lastMessage);
        setUserChats(chats);
    }
    getMessages();
   },[chat?._id, setUserChats, user?._id]);
   return {latestMessage};
}