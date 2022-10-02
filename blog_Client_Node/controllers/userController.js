const express = require("express")
const app = express()
const path = require("path")
const port = 8880;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
const hbs = require('hbs');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const cookieparser = require("cookie-parser")
const userModel = require("../models/userModel.js");
const blogModel = require("../models/blogModel.js");


var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.createUser= async(req, res)=>{
    console.log(req.body.name)

    const rsUser = new userModel(req.body)
    rsUser.save().then(() => {
        console.log('User Saved')
    }).catch((err)=>{
        console.log('User Save Error..' + err)
    });
    blogModel.find((err, data) => {
             res.render('my_index', {blogdata:data})
             }).limit(9)
    return true
}

exports.savecomment= async(req, res)=>{
    const findUser = await userModel.findOne({name: req.body.name})  
   
    if (findUser) 
    {
    await userModel.findByIdAndUpdate({_id: findUser._id}, req.body, {  
             
        }).then((data)=>{
            $set: {
                comment: req.body.comment
            
            }
        res.redirect('back')
        }
        ).catch((error)=>{
        res.send("Error Udpate API" + error)
        })
    }
    else {
        alert("error")
    }
        }

 exports.total_sub = async(req, res)=>{
   
    const total_sub = await userModel.find().count();
    res.send({total_sub}) 
   
}

exports.userLogin = async (req, res)=>{
    
    var password = req.body.pass

    const findUser = await userModel.findOne({name: req.body.name})   

    if (!findUser){                             
        //res.send("User ID Not Found")
        //res.send("/", <script>alert("your alert message"); </script>);
        //res.redirect("/", "alert(your alert message);")
        res.redirect('/');
    }
    else {
        const commuserid = findUser.name; 
        bcrypt.compare(req.body.pass, findUser.pass, function(err, result) {
          console.log(result)
                if (result) {
                    console.log('User Login Successfully')
                    const vToken = findUser.generateJWTToken()
                    res.cookie("node1", vToken)
                    blogModel.find((err, data) => {
                        res.render('my_index', {blogdata:data, userData:findUser})
                        }).limit(9) 
                }
                else {
                    console.log("User Login Failed")
                   res.redirect('/')
                }                
            });
    }

}
