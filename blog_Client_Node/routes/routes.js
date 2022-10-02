const express = require("express")
const app = express()
const path = require("path")
const port = 8880;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
require('../database/db.js')
const hbs = require('hbs');
const router = express.Router();
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const multer = require("multer")
var cors = require("cors")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const blogModel = require("../models/blogModel.js");
const vBlogController = require("../controllers/blogcontroller.js")

const userModel = require("../models/userModel.js");
const vUserController = require("../controllers/userController.js")

const authorModel = require("../models/authorModel.js");
const vAuthorController = require("../controllers/authorController.js")

const uploadfilenow = require('../middleware/uploadmiddle.js');

router.get("/", (req, res)=> {
    res.render("main.hbs")
})

router.get("/home", (req, res) => {
    blogModel.find((err, data) => {
        res.render("my_index", {blogdata:data})
    })
})

router.get("/article", (req, res) => {
    res.render("article.hbs")
})

router.get("/extra", (req, res)=>{
    res.render("extra")
})

router.post("/api/saveBlog", cors(), uploadfilenow ,  urlencodedParser, vBlogController.createBlog)
router.post("/api/save2", cors(), uploadfilenow, jsonParser, vBlogController.createBlog1)
router.get("/find2/:id", cors(), vBlogController.findBlog2)
router.get("/find3/:id", cors(), vBlogController.findBlog3)
router.post("/admin_edit2/:id/:title/:author/:aboutAuthor/:category/:para1/:para2/:para3/:para4/:para5/:para6", [jsonParser, cors()], vBlogController.updateBlog2)
router.get("/delete2/:id", cors(), vBlogController.deleteBlog2)
router.get("/api/all", cors(), vBlogController.showAllBlogs)
router.get("/total", cors(), vBlogController.total)
router.get("/profiles", vAuthorController.total1)
router.get("/article_details/:id", cors(), vBlogController.findBlog)
router.get("/findbyauthor/:name", vBlogController.findBlogbyauthor)
router.get("/findbycategory/:categoryname", vBlogController.findBlogbycategory)
router.get("/total_sub", urlencodedParser, vUserController.total_sub)
router.post("/saveUser", urlencodedParser, vUserController.createUser)
router.post("/userLogin", urlencodedParser, vUserController.userLogin)
router.post("/article_details/savecomment", urlencodedParser, vUserController.savecomment)
router.post("/api/add", cors(), uploadfilenow, jsonParser, vAuthorController.addAuthor)
router.get("/api/allauthors", cors(), vAuthorController.showAll)

module.exports = router;