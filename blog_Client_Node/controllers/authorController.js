const express = require("express")
const app = express()
const path = require("path")
const port = 8880;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
//require('../database/db.js')
const hbs = require('hbs');
const router = express.Router();
const multer = require("multer")
var cors = require('cors')

//const mod = require('../models/blogModel');
const blogModel = require("../models/blogModel.js");
const userModel = require("../models/userModel.js");
const authorModel = require("../models/authorModel.js");
//const commentModel = require("../models/commentModel.js");
//const uploadfileMiddle = require('./middleware/uploadmiddle.js')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.addAuthor= async (req, res)=>{
    const rsAuthor = new authorModel({
        name: req.body.name,
        about: req.body.about,
        description: req.body.description
    })
    rsAuthor.save().then(() => {
        console.log('Author Saved')
    }).catch((err)=>{
        console.log('Author Save Error..' + err)
    });
    res.redirect("http://localhost:3000/home")  
    return true
}

exports.showAll=(req, res)=>{
        authorModel.find((err, data)=>{
        if(!err){
            console.log("Data is.. " + data)
            res.send(data) //use this, if you want to send data in json form to third party
        }
        else{
            res.send(404)
        }
    })
}

exports.total1 = async(req, res)=>{

    const data = await authorModel.find();
    const technology_articles = await blogModel.find({ author: 'Muhammad Jamil' }).count();
    const health_articles = await blogModel.find({ author: 'Shahid Jamal' }).count();
    const islam_articles = await blogModel.find({ author: 'Ahmed Bilal' }).count();
    res.render('profiles', {data, technology_articles, health_articles, islam_articles}) 
        
}