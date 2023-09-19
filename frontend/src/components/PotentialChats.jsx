import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'
import { Avatar, Box } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//use potentialChats from chat context instead of all users


const PotentialChats = () => {
  const { user } = useContext(AuthContext);
  const { createChat, allUsers } = useContext(ChatContext);
  const settings = {
    arrows: false,
    className: "center",
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <Box sx={{ height: '10vh', justifyContent: 'center', alignItems: 'center', marginTop:'2vh' }}>
      <Slider {...settings}>
        {allUsers.map((avatar, index) => (
          <React.Fragment key={index}>
            <Avatar sx={{height:56,width:56}} src={avatar?.avtImg} onClick={() => createChat(user._id, avatar?._id)} />
          </React.Fragment>
        ))}
      </Slider>
    </Box>
  )
}

export default PotentialChats
