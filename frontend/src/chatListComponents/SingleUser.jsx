import { Typography, Avatar, Grid, Badge } from '@mui/material';
import { useFetchRecipientUser } from '../hooks/useFetchRecipient'
import { useFetchLatestMessage } from '../hooks/useFetchLatestMessage'
import { unreadNotificationsFunc } from '../hooks/unreadNotifications'
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import moment from 'moment';

const SingleUser = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user);
    const { notifications, markThisUserNotificationsAsRead } = useContext(ChatContext);
    const { latestMessage } = useFetchLatestMessage(chat);

    const unreadNotifications = unreadNotificationsFunc(notifications);
    const thisUserNotifications = unreadNotifications?.filter(
        n => n.senderId === recipientUser?._id
    )

    const truncateText = (text) => {
        let shortText = text?.substring(0, 20);

        if (text?.length > 20) {
            shortText = shortText + "...";
        }
        return shortText;
    }
    return (
        <>
            <Grid container rowSpacing={0.1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} height={78} alignItems={'center'} onClick={() => {
                if (thisUserNotifications?.length !== 0) {
                    markThisUserNotificationsAsRead(thisUserNotifications, notifications);
                }
            }} sx={{cursor:'pointer',
            transition: 'box-shadow 0.3s ease', '&:hover': {
                backgroundColor: 'grey',
                boxSadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
              }}}>
                <Grid item xs={1.5}>
                    <Avatar variant="square" alt="Remy Sharp" src={recipientUser?.avtImg} sx={{ borderRadius: 3, marginLeft: '0.5%' }} />
                </Grid>
                <Grid item xs={7.5}>
                    <Typography sx={{ fontWeight: 700, fontSize: 17 }}>{recipientUser?.name}</Typography>
                    <Typography sx={{ fontSize: 10 }}>{truncateText(latestMessage?.text)}</Typography>
                </Grid>
                <Grid item xs={3} alignItems={'end'} justifyContent={'end'}>
                    <Typography sx={{ fontWeight: 50, fontSize: 11, }} marginTop={0.6}>{moment(latestMessage?.createdAt).calendar()}</Typography>
                    {thisUserNotifications?.length > 0 ? <Badge badgeContent={thisUserNotifications?.length} color="primary" sx={{ marginLeft: 3.6, marginTop: 1 }} /> : null}
                </Grid>
            </Grid>
        </>
    )
}

export default SingleUser
