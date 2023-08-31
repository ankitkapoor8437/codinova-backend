// Load environment variables from a .env file into process.env
require('dotenv').config()

// Import required packages
const express = require("express");
const bodyParser = require('body-parser');
const { connectDb } = require('./config/dbConnection');
var cors = require('cors')

// Establish a connection to the MongoDB database
connectDb();

// Create an instance of the Express application
const app = express();

// Get the port number from environment variables
const port = process.env.PORT;

// Configure middleware
app.use(express.json({limit:"10mb"}));
app.use(bodyParser.json());
app.use(cors())


// Define a route for the root URL
app.get("/", (req, res) => {
    res.send("Hello!!")
});

// Mount routes for adding exchange data and icons
app.use("/addExchangeData", require("./routes/exchangeData"));
app.use("/addExchangeIcon", require("./routes/exchangeIcon"));

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
});