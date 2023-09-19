import { Typography, Grid, Stack, Box, TextField, Button, Alert, } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext"
import { Link } from 'react-router-dom';


const Login = () => {
    const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } = useContext(AuthContext);
    return (
        <form onSubmit={loginUser}>
            <Grid container sx={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"})`, backgroundRepeat: "no-repeat", backgroundSize: '100% 100%', height: '100vh', width: '100vw' }} >
                <Grid item xs={5} sx={{ height: '100%', width: '100%' }}>
                    {/* <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/a/ACg8ocIVFblqy5i6jqndG0k4EWlXRMT1PyQD_hFScK2pk96dIFg=s360-c-no" sx={{ marginTop: '34%', marginLeft: '45%', height: 300, width: 300 }}>
                    <CameraAltIcon />
                </Avatar> */}
                </Grid>
                <Grid item xs={7}>
                    <Typography marginTop={'20vh'} marginLeft={'22%'} fontSize={35} fontWeight={700}>Login</Typography>
                    <Stack marginTop={'5vh'} spacing={4} marginLeft={'22%'}>
                    <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField InputLabelProps={{
                                style: { color: '#fff' },
                            }} placeholder='Email' fullWidth variant='standard' label="Email" name="email" type="email" onChange={(e) => updateLoginInfo({ ...loginInfo, email: e.target.value })} required/>
                        </Box>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField InputLabelProps={{
                                style: { color: '#fff' },
                            }} placeholder='Password' fullWidth variant='standard' label="Password" name="password" type="password" onChange={(e) => updateLoginInfo({ ...loginInfo, password: e.target.value })} required />
                        </Box>
                        <Stack>
                            <Button type='submit' sx={{ width: '11vw', height: '7vh', marginLeft: '10vw',color:'white'}} variant="outlined">{isLoginLoading ? "Getting you in..." : "Login"}</Button>
                            {
                                loginError?.error && <Alert style={{ width: '40%', marginTop:'2vh',marginLeft:'6vw' }} severity="warning">{loginError?.message}</Alert>
                            }
                            <Typography sx={{position:'absolute',top:'77vh',left:'62vw'}}>Don't have an account? Sign Up <Link to='/register' className='here'>here</Link></Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </form>
    )
}

export default Login
