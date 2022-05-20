//Create two routes with get and post requests, 
//the route with the get route should get a list
//of all users stored on MongoDb
//The post route should create a user using the schema
//Name: course: year:

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

const postRouter = require('./routes/Post');
// parse requests of content-type 
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', postRouter);


//connection to database
mongoose.connect('mongodb://localhost:27017/kodecampDB', {},
    function (err) {
        if (err) console.log(err);
        console.log("Connected to database successfully");
    });




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Josh Listening on port ${port}...`));


