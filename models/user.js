const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:'String',
        required:true
    },
    email:{
        type:'String',
        required:true
    },
    password:{
        type:'String',
        required:true
    },
    isAdmin:{
        type:'Boolean',
        default: false
    },
    resetToken:'String',
    expireToken:Date,
    pic:{
     type:'String',
     default:"https://res.cloudinary.com/ditqe6mkf/image/upload/v1635806166/images_d5olfa.jpg"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

mongoose.model("User",userSchema)