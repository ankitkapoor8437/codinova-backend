const express = require("express");
const dotenv = require("dotenv").config();


const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());
app.use("/api/", require("./routes/exchangeList"));


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
});