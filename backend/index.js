const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');
const chatRoute = require('./Routes/chatRoute');
const messageRoute = require('./Routes/messageRoute');
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.text({ limit: '200mb' }));
app.use(express.json());
app.use(cors());
app.use('/api/users',userRoute);
app.use('/api/chats',chatRoute);
app.use('/api/messages',messageRoute);

const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI || 5000;

app.get('/',(req,res)=>{
    res.send("Welcome lavde");
})

app.listen(PORT,(req,res)=>{
    console.log(`server is running on PORT ${PORT}`);
});

mongoose.connect(uri,{useNewUrlParser:true,
    useUnifiedTopology:true}).then(console.log('MongoDB connection established')).catch((err)=>{
        console.log("MongoDB connection failed: ",err.message);
    })

