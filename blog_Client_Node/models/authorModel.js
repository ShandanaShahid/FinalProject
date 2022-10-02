const express = require("express")
const app = express()
const path = require("path")
const port = 8880;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
require('../database/db.js')
const hbs = require('hbs');

var schema4 = new mongoose.Schema({
    name: [],
    about: [],
    description: []
})

const authorModel = mongoose.model('addauthor', schema4)

module.exports = authorModel;
