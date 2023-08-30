const express = require("express");
const app = express();
const PORT = 9000;

app.get("/",(req,res)=>{
    res.json({message: "Hello from Codinova"});
})

app.listen(3000 || PORT, ()=> console.log(`Server is running on Port ${PORT}`))