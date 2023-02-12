const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://GurveerVirk:Gurdarsh0501@cluster0.8uhnhwe.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = () =>{
    mongoose.connect(mongoURI,{
        dbName:'FRM'},()=>{
        console.log("Connected to MongoDB successfully");
    })
}
module.exports=connectToMongo;