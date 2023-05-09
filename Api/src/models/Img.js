const mongoose = require("mongoose");


const ImgSchema = new mongoose.Schema({
     filename:{
        type:String
     }
  
    
    
});



const Img = new mongoose.model("Imag", ImgSchema);




module.exports = Img;