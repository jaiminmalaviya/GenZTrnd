import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please Enter Name'],
    },
    email:{
        type:String,
        match:[/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i],
        required:[true, 'Please Enter Email']
    },
    password:{
        required:[true, 'Please Enter Password'],
        type:String,
        minlength:6,
        maxlength:32
    }
},{versionKey:false, timestamps:true})


const User = mongoose.model('User', userSchema)

export default User