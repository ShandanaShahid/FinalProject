const express = require("express")
const app = express()
const path = require("path")
const port = 8880;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
const hbs = require('hbs');
const router = express.Router();
const multer = require("multer")
var cors = require('cors')

const blogModel = require("../models/blogModel.js");
const userModel = require("../models/userModel.js");

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.createBlog= async (req, res)=>{
    const rsBlog = new blogModel({
        title: req.body.title,
        postimg: req.file.filename,
        author: req.body.author,
        aboutAuthor: req.body.aboutAuthor,
        category: req.body.category,
        para1: req.body.para1,
        para2: req.body.para2,
        para3: req.body.para3,
        para4: req.body.para4,
        para5: req.body.para5,
        para6: req.body.para6,
        keywords: req.body.keywords
    })
    rsBlog.save().then(() => {
        console.log('Blog Saved')
    }).catch((err)=>{
        console.log('Blog Save Error..' + err)
    });
    res.redirect("http://localhost:3000/Dashboard")  
    return true
}

exports.createBlog1= async (req, res)=>{
  
    const rsBlog = new blogModel({
        title: req.body.title,
        postimg: '0eb16f61-502d-47fb-8c9c-3475d36a2eeb-web-design-internet-website-responsive-software-concept.jpg',
        author: req.body.author,
        aboutAuthor: req.body.aboutAuthor,
        createdAt: {type: Date, default: Date.now},
        category: req.body.category,
        para1: req.body.para1,
        para2: req.body.para2,
        para3: req.body.para3,
        para4: req.body.para4,
        para5: req.body.para5,
        para6: req.body.para6,
        keywords: req.body.keywords
    })
    rsBlog.save().then(() => {
        console.log('Blog Saved')
    }).catch((err)=>{
        console.log('Blog Save Error..' + err)
    });
    res.redirect("http://localhost:3000/home")  
    return true
}

exports.showAllBlogs=(req, res)=>{
        blogModel.find((err, data)=>{
        if(!err){
             res.send(data) 
        }
        else{
            res.send(404)
        }
    })
}

exports.total = async(req, res)=>{
   
        const total_articles = await blogModel.find().count();
        const technology_articles = await blogModel.find({ category: 'TECHNOLOGY' }).count();
        const health_articles = await blogModel.find({ category: 'HEALTH' }).count();
        const islam_articles = await blogModel.find({ category: 'ISLAM' }).count();
        res.send({total_articles, technology_articles, health_articles, islam_articles}) 
       
}

exports.findBlog= async (req, res)=>{

const commentdata = await userModel.find().lean();

    blogModel.findById({_id: req.params.id}, (err, data)=>{
        if (!err){           
            res.render("article_details", {blogdata: data, commdata:commentdata})
        }
        else{
            res.send("Data fetch Error ... " + err)
        }
     
    })
}

exports.findBlogbycategory = async (req, res)=>{
   
    blogModel.find((err, data)=>{
     
            if (!err){
               
                const check = req.params.categoryname;
                if(check === "${HEALTH}"){
                    blogModel.find({ category: 'HEALTH' }, (err, data) => {
                        res.render('cat', {healthdata:data})
                    })
                }
                else if(check === "${TECHNOLOGY}"){
                    blogModel.find({ category: 'TECHNOLOGY' }, (err, data) => {
                        res.render('cat', {healthdata:data})
                    })
                }
                else if(check === "${ISLAM}"){
                    blogModel.find({ category: 'ISLAM' }, (err, data) => {
                        res.render('cat', {healthdata:data})
                    })
                }
                else {
                        res.render('under_construction')
                    }
                }
            
            else{
                res.send("Data fetch Error ... " + err)
            }
           
        })
    }

exports.findBlogbyauthor = async (req, res)=>{
blogModel.find((err, data)=>{
 
        if (!err){
            const check = req.params.name;
            if(check === "Shahid Jamal"){
                blogModel.find({ author: 'Shahid Jamal' }, (err, data) => {
                    res.render('cat', {healthdata:data})
                })
            }
            else if(check === "Muhammad Jamil"){
                blogModel.find({ author: 'Muhammad Jamil' }, (err, data) => {
                    res.render('cat', {healthdata:data})
                })
            }
            else {
                blogModel.find({ author: 'Ahmed Bilal' }, (err, data) => {
                    res.render('cat', {healthdata:data})
                })
            }
        }
        else{
            res.send("Data fetch Error ... " + err)
        }
       
    })
}

exports.editBlog= async (req, res)=>{
    blogModel.findById({_id: req.params.id}, (err, data)=>{
        if (!err){           
            res.render("admin_edit", {blogdata: data})
        }
        else{
            res.send("Data fetch Error ... " + err)
        }
    })
}

exports.findBlog2= async (req, res)=>{
    blogModel.findById({_id: req.params.id}, (err, data)=>{
        if (!err){
            res.send(data)
        }
        else{
            console.log("error")
            res.send("Data fetch Error ... " + err)
        }
    })
}

exports.findBlog3= async (req, res)=>{
    blogModel.findById({_id: req.params.id}, (err, data)=>{
        if (!err){
            res.send(data)
        }
        else{
            res.send("Data fetch Error ... " + err)
        }
    })
}

exports.updateBlog2 = async (req, res) => {
    try {
        const result = await blogModel.findOneAndUpdate({ _id: req.params.id }, {
          
            $set: {
                title: req.params.title,
                author: req.params.author,
                aboutAuthor: req.params.aboutAuthor,
                category: req.params.category,
                para1: req.params.para1,
                para2: req.params.para2,
                para3: req.params.para3,
                para4: req.params.para4,
                para5: req.params.para5,
                para6: req.params.para6
            }    
        })
       
       res.send(data)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.deleteBlog2 = async (req, res)=>{ 
    console.log("ID of a deleted item..." + req.params.id)  
    try { 
        const result = await blogModel.findByIdAndDelete({ _id: req.params.id })
        res.send(data)
    } catch (error) {
        res.send("Error Delete API" + error)
    }
}

