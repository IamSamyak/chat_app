import './App.css';
import VideoCall from './pages/VideoCall';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ChatRoom from './pages/ChatRoom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import {Routes,Route,Navigate} from 'react-router-dom';
import { Box } from '@mui/material';
// import NavBar from './components/NavBar';

function App() {
  const {user} = useContext(AuthContext);
  return (
    <ChatContextProvider user = {user}>
    {/* <NavBar/> */}
    <Box>
      <Routes>
        <Route path="/" element={user ? <ChatRoom/> : <Login/>}/>
        <Route path="/register" element={user ? <ChatRoom/> : <SignUp/>}/>
        <Route path="/login" element={user ? <ChatRoom/> : <Login/>}/>
        <Route path="/video" element={user ? <VideoCall/> : <Login/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Box>
    </ChatContextProvider>
  );
}

export default App;
