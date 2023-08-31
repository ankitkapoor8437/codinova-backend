require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const { connectDb } = require('./config/dbConnection');
var cors = require('cors')
connectDb();


const app = express();
const port = process.env.PORT;

// Middleware functions
app.use(express.json({limit:"10mb"}));
app.use(bodyParser.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello!!")
});

app.use("/addExchangeData", require("./routes/exchangeData"));

app.use("/addExchangeIcon", require("./routes/exchangeIcon"));


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
});