const express = require("express")
const app = express()
const path = require("path")
const port = 8880;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
require('../database/db.js')
const hbs = require('hbs');
//const multer = require("multer")

//const uploadfileMiddle = require('./middleware/uploadmiddle.js')

var schema1 = new mongoose.Schema({
    title: [],
    postimg: String,
    author: [],
    aboutAuthor: [],
    createdAt: {type: Date, default: Date.now},
    category: [],
    para1: [],
    para2: [],
    para3: [],
    para4: [],
    para5: [],
    para6: [],
    keywords: []
})

const blogModel = mongoose.model('addablogs', schema1)

module.exports = blogModel;
