const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path= require('path');
const dotenv=require('dotenv');
const PORT = process.env.PORT||5000; 
dotenv.config();
const routes = require('./routes/api');
mongoose.connect(process.env.Con,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use(cors());
app.use('/api', routes);

app.get('/',(req,res)=>{
    res.send('Working Perfectly');
});


app.listen(PORT, console.log("Connected"));