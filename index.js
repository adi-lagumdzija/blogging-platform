const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express();
dotenv.config();


const connect = async() => { 
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to the database!")
  } catch (error) {
    throw error
  }
}

mongoose.connection.on("disconnected", () =>{
    console.log("Disconnected from the database")
})
mongoose.connection.on("connected", () =>{
    console.log("Connected to the mongoDB")
})

app.listen(5052, () => {
    connect() 
    console.log("Connected to server!")
}) 

app.get("/", (req,res) => {
    res.send("hello route")
})