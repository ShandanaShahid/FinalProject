const express = require("express")
const app = express()
const path = require("path")
//var bodyParser = require('body-parser')
//var jsonParser = bodyParser.json()

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blog');//for local host
    //mongoose.connect('mongodb+srv://Shandana:<typeheretosearch1>@cluster0.aa7vy68.mongodb.net/blog?retryWrites=true&w=majority, 
//    {
  //      useNewUrlParser: true,
    //    useFindAndModify: false,
      //  useUnifiedTopology: true
      //}
    //);
    console.log("connected")

//mongoose.pluralize(null)




