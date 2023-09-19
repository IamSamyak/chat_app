import { Typography, Avatar, Grid, Stack, Box, TextField, Button, Alert } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } = useContext(AuthContext);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(URL.createObjectURL(file));
            const reader = new FileReader();
            reader.onload = () => {
                updateRegisterInfo({ ...registerInfo, avtImg: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={registerUser}>
            <Grid container sx={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"})`, backgroundRepeat: "no-repeat", backgroundSize: '100% 100%', height: '100vh', width: '100vw' }} >
                <Grid item xs={5} sx={{ height: '100%', width: '100%' }}>
                    {selectedFile ?
                        <Avatar alt="Remy Sharp" src={selectedFile} sx={{ marginTop: '34%', marginLeft: '45%', height: 300, width: 300 }} /> :
                        <Avatar alt="Remy Sharp" src='https://lh3.googleusercontent.com/a/ACg8ocIVFblqy5i6jqndG0k4EWlXRMT1PyQD_hFScK2pk96dIFg=s360-c-no' sx={{ marginTop: '34%', marginLeft: '45%', height: 300, width: 300 }} />
                    }
                </Grid>
                <Grid item xs={7}>
                    <Typography marginTop={'20vh'} marginLeft={'22%'} fontSize={35} fontWeight={700}>Sign Up</Typography>
                    <Stack marginTop={'5vh'} spacing={4} marginLeft={'22%'}>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%'
                            }}
                        >
                            <TextField InputLabelProps={{
                                style: { color: '#fff' },
                            }} sx={{ color: 'white' }} placeholder='Enter your name' fullWidth id="name" variant='standard' label="Name" name="name" onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })} required/>
                        </Box>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField InputLabelProps={{
                                style: { color: '#fff' },
                            }} sx={{ color: 'white' }} placeholder='Enter your email' fullWidth id="email" variant='standard' label="Email" name="email" type="email" onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })} required />
                        </Box>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField InputLabelProps={{
                                style: { color: '#fff' },
                            }} sx={{ color: 'white' }} placeholder='Enter your password' fullWidth id="password" variant='standard' label="Password" name="password" type="password" onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })} required />
                        </Box>
                        <Stack>
                            <Button type="submit" sx={{ width: '11vw', height: '7vh', marginLeft: '10vw' }} variant="outlined">{isRegisterLoading ? "Creating your account" : "Register"}</Button>
                            {
                                registerError?.error && <Alert variant="danger"><p>{registerError?.message}</p></Alert>
                            }
                            <Typography marginLeft={'7vw'} marginTop={4}>Already have an account? Login <Link to='/login' className='here'>here</Link></Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Box>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="avatar-upload"
                    onChange={handleImageChange}
                    name="avtImg"
                />
                <label htmlFor="avatar-upload">
                    <Button component="span" sx={{ position: 'absolute', top: '61vh', left: '26.5vw' }}>
                        <Avatar sx={{ bgcolor: '#F6F6F6' }}>
                            <CameraAltIcon sx={{ color: 'black' }} />
                        </Avatar>
                    </Button>
                </label>
            </Box>
        </form>
    )
}

export default SignUp
