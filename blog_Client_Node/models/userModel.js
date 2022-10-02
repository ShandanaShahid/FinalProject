const express = require("express")
const app = express()
const path = require("path")
const port = 8880;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
require('../database/db.js')
const hbs = require('hbs');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

var schema2 = new mongoose.Schema({
    name: {type: String, required: true},
    mail: String,
    pass: String,
    comment: [],
    createdAt: {type: Date, default: Date.now},
    tokens: [{
        token: String
    }]
})

schema2.pre('save', async function(next){
    // var saltrange = bcrypt.genSalt(10)
    if(this.isModified("pass")){
    var saltrange = 10
    this.pass = await bcrypt.hashSync(this.pass, saltrange)
    }
    next()
})

schema2.methods.generateJWTToken = function(){
    try {
        var generatedtoken = jwt.sign({id: this._id}, "FULLSTACKWEBDEVELOPEMENTMEANMERN")            
        this.tokens = this.tokens.concat({token: generatedtoken})
        this.save()       
        return generatedtoken;
    }
    catch(err){
        console.log(err)
        return "false"
    }
}


const userModel = mongoose.model('addauser', schema2)

module.exports = userModel;
