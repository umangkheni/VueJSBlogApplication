const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
        UserId:{
            type: String,
            required:true
        },
        TiTel:{
            type: String,
            required:true
        },
        imgUrl:{
            type: String,
            required:true
        },
        Pera:{
            type: String,
            required:true
        },
        Type:{
            type: String,
            required:true
        },
        Date:{
            type: String,
            required:true
        },
        Name:{
            type: String,
            required:true
        }

});

const Blog = new mongoose.model("Blog", blogSchema);




module.exports = Blog ;



