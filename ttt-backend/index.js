const express  = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();

// importing Process Vars
const PORT = process.env.PORT || 4000;

// Exppres App Setup
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());

// Importing Routes
const route = require('./Routes/index');


// Using Routes
app.use(route);

// Starting Server

const server = app.listen(PORT , () => {
    console.log("Server Started at : "+ PORT);
})