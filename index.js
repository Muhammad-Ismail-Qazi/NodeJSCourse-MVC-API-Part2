
const routes = require('./routes/routes.js');
const { connectMongodb } = require('./configuration/db_connection.js');
const {userModel} = require('./models/user_model.js');
const express = require('express');
const app = express();

// Middleware for parsing JSON request bodies and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to MongoDB
connectMongodb("mongodb://localhost:27017/NodeJSCourse");


app.use('/api/v1', routes); 


// Create and start the server
app.listen(1500,()=>{
    console.log('Server running on port 1500');
});
