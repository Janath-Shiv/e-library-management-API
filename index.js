const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

port = process.env.PORT;
app.listen(port);
if(port) console.log(`App running on port ${port}`);
const connect = mongoose.connect(process.env.CONNECTION_STRING).then (() =>{
    console.log(`DATABASE CONNECTION DONE`);
})

app.use(express.json());
app.use("/api/first",require("./route/firstroute"));
app.use("/api/user",require("./route/secondroute"));