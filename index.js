const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config();
const { connectDb } = require('./config/dbConnection');
connectDb();


const app = express();
const port = 5000 || process.env.PORT;

// Middleware functions
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/exchangeList", require("./routes/exchangeList"));


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
});