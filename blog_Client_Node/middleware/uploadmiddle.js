const multer = require("multer")
const uuid = require("uuid")

const storage = multer.diskStorage({
    destination: function(req, file, destFunc){
        destFunc(null, "./public/uploads")
},
    filename: function(req, file, fileFunc){
    //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)//To add unique image name 
    //fileFunc(null, uuid.v4() + "-" + file.originalname);
    fileFunc(null, uuid.v4() + "-" + file.originalname);
    console.log("file" + file)
    }
})

function typesallowed(req, file, typecallback){
    const type = file.mimetype;
    //console.log(type)
    if (type==="image/jpeg" || type ==="image/jpg" || type==="image/gif" || type==="image/png"){
        typecallback(null, true)
    }
    else {
        typecallback(file.mimetype + " - Only image formate is allowed");
    }
}

const uploadfilenow = multer({storage: storage, fileFilter: typesallowed}).single("txtImage");

module.exports = uploadfilenow