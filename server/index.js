import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'

//initialize App
const app = express();

app.use(cors()); //This should be above "app.use('/posts', postRoutes);"

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

//THIS ALWAYS BELOW BODYPARSER
app.use('/posts', postRoutes); //add prefix for posting Jokes




//Connect to Database MongoDB
const CONNECTION_URL = 'mongodb+srv://Lenzia:psw@cluster0.uduhs.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on ${PORT} and connected to DB`)))
.catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false); //makes sure we dont get any warning 

