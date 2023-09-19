import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Avatar, Link, Stack, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const CurrentUser = () => {
    const { user, logoutUser } = useContext(AuthContext);
    return (
        <Stack direction={'column'} marginTop={'3vh'}>
            <Avatar src={user?.avtImg} sx={{ marginLeft: 4 }} />
            <Typography sx={{fontWeight:'bold',textAlign:'center',marginTop:'1vh'}}>Logged in as</Typography>
            <Typography sx={{fontWeight:'bold',textAlign:'center'}}>{user?.name}</Typography>
            <Typography sx={{fontWeight:'bold',textAlign:'center',marginTop:'3vh'}}>Logout</Typography>
            <Avatar sx={{ bgcolor: '#F6F6F6',marginLeft: 3.8,marginTop:'1vh' }}>
                <Link onClick={() => logoutUser()} to='/login'>
                    <LogoutIcon sx={{ color: 'black' }} />
                </Link>
            </Avatar>
        </Stack>
    )
}

export default CurrentUser
