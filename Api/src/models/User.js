const mongoose = require("mongoose");
const bcript = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        minlength:2,
        required:true,
    }
    
    
});

userSchema.pre("save" , async function (next) {

    if(this.isModified("password")){
        console.log(`password is ${this.password}`);
        this.password = await bcript.hash(this.password, 10)
        console.log(`password is ${this.password}`);
        

    }

next();

} );

const User = new mongoose.model("User", userSchema);




module.exports = User;
