const express = require("express")
const app = express()
const path = require("path")
const port = 8880;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
require('./database/db.js')
const hbs = require('hbs');

const cors=require("cors");

app.use(cors())

app.set('view engine', 'hbs');
const includepath = path.join(__dirname, 'views/include');

hbs.registerPartials(includepath);

app.use('/', require(path.join(__dirname, 'routes/routes.js')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/css/style.css')));
app.use(express.static(path.join(__dirname, 'public/images')));

//app.use(express.static(path.join(__dirname, 'middleware/uploadmiddle.js')));
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//mongoose.pluralize(null)..if you dont want your model to be pluralize

app.listen(port, ()=> {
    console.log("Your server has been connected..")
})

